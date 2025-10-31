import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./PDFViewer.module.scss";

type PDFViewerProps = {
  url: string;
  onReupload: () => void;
  onDownload: () => void;
};

const PDFViewer: React.FC<PDFViewerProps> = ({ url, onReupload, onDownload }) => {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <Card className={styles.card}>
      <div className={styles.iframeContainer}>
        {isMobile ? (
          <object
            data={url}
            type="application/pdf"
            className={styles.iframe}
          >
            <div className={styles.mobileMessage}>
              <p>PDF preview may not be supported on your device.</p>
              <p>Please use the download button below to view the PDF.</p>
            </div>
          </object>
        ) : (
          <iframe src={url} title="Signed PDF" className={styles.iframe} />
        )}
      </div>
      <div className={styles.actions}>
        <Button variant="outlined" onClick={onReupload} fullWidth className={styles.reuploadButton}>
          Re-upload
        </Button>
        <Button variant="contained" color="success" onClick={onDownload} fullWidth className={styles.downloadButton}>
          Download
        </Button>
      </div>
    </Card>
  );
};

export default PDFViewer;


