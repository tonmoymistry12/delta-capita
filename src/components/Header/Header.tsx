import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>PDF Signer</h1>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>
            <HomeIcon className={styles.homeIcon} />
            <span>Home</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
