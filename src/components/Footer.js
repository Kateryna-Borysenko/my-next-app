import Image from "next/image";
import styles from "../styles/Footer.module.css";
import K from "../components/icons/К";


const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrap}>
      <Image className={styles.logo} src="/logo.png" width={58} height={58} alt="appLogo" />

      <div className={styles.logoName}>Logo</div>
      <div className={styles.year}>© {new Date().getFullYear()}</div>
      <div className={styles.createdBy}>created by</div>
      <K className={styles.kLogo} />
      <a href="https://github.com/Kateryna-Borysenko" className={styles.link}>
        <span className={styles.lastName}>Borysenko</span>
      </a>
    </div>
  </footer >
);

export default Footer;
