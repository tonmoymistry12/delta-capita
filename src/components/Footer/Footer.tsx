import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>Copyright © 2025 PDF Signer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
