import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import styles from "./ProgressView.module.scss";

type ProgressViewProps = {
  label?: string;
};

const ProgressView: React.FC<ProgressViewProps> = ({ label = "Signing your PDF..." }) => {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerWrapper}>
        <CircularProgress className={styles.progress} thickness={4} />
        <div className={styles.pulseRing}></div>
      </div>
      <Typography className={styles.label}>
        {label}
        <span className={styles.dots}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </Typography>
    </div>
  );
};

export default ProgressView;


