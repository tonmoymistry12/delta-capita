import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import styles from "./UploadCard.module.scss";

type UploadCardProps = {
  disabled?: boolean;
  fileName?: string | null;
  onChange: (file: File) => void;
};

const UploadCard: React.FC<UploadCardProps> = ({ disabled, fileName, onChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onChange(file);
  };

  return (
    <Card elevation={0} className={styles.card}>
      <CardContent className={styles.cardContent}>
        <div className={styles.uploadZone}>
          <UploadFileOutlinedIcon className={styles.uploadIcon} />
          <Typography variant="h5" className={styles.title}>
            Drop your PDF here
          </Typography>
          <Typography variant="body2" className={styles.subtitle}>
            or click to browse
          </Typography>
          {fileName && (
            <div className={styles.fileChip}>
              <Typography variant="body2" className={styles.fileName}>
                {fileName}
              </Typography>
            </div>
          )}
          <Button
            variant="contained"
            component="label"
            size="large"
            disabled={disabled}
            className={styles.uploadButton}
          >
            Choose File
            <input hidden type="file" accept="application/pdf" onChange={handleFileChange} />
          </Button>
          <Typography variant="caption" className={styles.hint}>
            Supports: PDF files up to 10MB
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadCard;


