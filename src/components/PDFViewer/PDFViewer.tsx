import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./PDFViewer.module.scss";

// Configure PDF.js worker - this is critical for blob URL support on mobile
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type PDFViewerProps = {
  url: string;
  onReupload: () => void;
  onDownload: () => void;
};

const PDFViewer: React.FC<PDFViewerProps> = ({ url, onReupload, onDownload }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const isMobile = useMediaQuery("(max-width:599px)");

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError("");
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading PDF:", error);
    setLoading(false);
    setError("Failed to load PDF. Please try re-uploading.");
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <Card className={styles.card}>
      <div className={styles.pdfContainer}>
        {loading && !error && (
          <div className={styles.loadingContainer}>
            <CircularProgress />
            <p>Loading PDF...</p>
          </div>
        )}
        
        {error ? (
          <div className={styles.errorContainer}>
            <p>{error}</p>
          </div>
        ) : (
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading=""
            className={styles.document}
          >
            <Page
              pageNumber={pageNumber}
              width={isMobile ? Math.min(window.innerWidth - 32, 600) : undefined}
              scale={isMobile ? 1 : 1.5}
              className={styles.page}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
        
        {numPages > 1 && !loading && !error && (
          <div className={styles.pagination}>
            <IconButton
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className={styles.navButton}
              size="small"
            >
              <ChevronLeftIcon />
            </IconButton>
            <span className={styles.pageInfo}>
              Page {pageNumber} of {numPages}
            </span>
            <IconButton
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className={styles.navButton}
              size="small"
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
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


