import React, { useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useMediaQuery from "@mui/material/useMediaQuery";
import UploadCard from "../../components/UploadCard/UploadCard";
import ProgressView from "../../components/ProgressView/ProgressView";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import { mockSignPDF } from "../../utils/mockSignPDF";
import styles from "./Home.module.scss";

type Step = "upload" | "signing" | "view";

const Home: React.FC = () => {
  const [step, setStep] = useState<Step>("upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const fileName = useMemo(() => selectedFile?.name ?? null, [selectedFile]);
  const isMobile = useMediaQuery("(max-width:599px)");

  const handleUpload = async (file: File) => {
    setSelectedFile(file);
    setStep("signing");
    const url = await mockSignPDF(file);
    setSignedUrl(url);
    setStep("view");
    setSnackOpen(true);
  };

  const handleReupload = () => {
    setSelectedFile(null);
    setSignedUrl(null);
    setStep("upload");
  };

  const handleDownload = () => {
    if (!signedUrl) return;
    const link = document.createElement("a");
    link.href = signedUrl;
    link.download = "signed.pdf";
    link.click();
  };

  const contentClass = `${styles.content} ${step === "upload" ? styles.contentCentered : ""}`;

  return (
    <>
     
      <Container maxWidth={step === "view" ? "lg" : "sm"} className={styles.container}>
        <div className={contentClass}>
          {step === "upload" && (
            <UploadCard disabled={false} fileName={fileName} onChange={handleUpload} />
          )}
          {step === "signing" && <ProgressView label="Signing your PDF... please wait" />}
          {step === "view" && signedUrl && (
            <PDFViewer url={signedUrl} onReupload={handleReupload} onDownload={handleDownload} />
          )}
        </div>
      </Container>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: isMobile ? "top" : "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setSnackOpen(false)} className={styles.snackbar}>
          PDF signed successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
