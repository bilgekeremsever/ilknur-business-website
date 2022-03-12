import styles from "../../styles/header/topbar.module.scss"
const Topbar = () => {
  return (
    <div id="topbar">
      <div
        className={`container ${styles.topbarItems}`}>
        <span className={styles.phrase}>Hemen Ulaşın</span>
        <a href="tel:+90123456789" className={styles.phone}>
          <i className="bi bi-telephone"></i>
          <span>+905364753</span>
        </a>
        <a href="mailto:example@gmail.com" className={styles.mail}>
          <i className="bi bi-envelope"></i>
          <span>example@gmail.com</span> 
        </a>

        <a href="#" className={styles.storeLink}>store link</a>
      </div>
    </div>
  )
}

export default Topbar
