import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import styles from "./PDFViewer.module.scss";

type PDFViewerProps = {
  url: string;
  onReupload: () => void;
  onDownload: () => void;
};

const PDFViewer: React.FC<PDFViewerProps> = ({ url, onReupload, onDownload }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.iframeContainer}>
        <iframe src={url} title="Signed PDF" className={styles.iframe} />
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


