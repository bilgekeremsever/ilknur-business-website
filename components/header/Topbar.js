import styles from "../../styles/header/topbar.module.scss"
import useGlobalContext from "../../lib/hooks/useGlobalContext"

const Topbar = () => {
  const { email, telephone, telephoneText, storeLink, storeText } =
    useGlobalContext()

  return (
    <div id="topbar">
      <div className={`container ${styles.topbarItems}`}>
        <span className={styles.phrase}>Hemen Ulaşın</span>
        <a href={`tel:${telephone}`} className={styles.phone}>
          <i className="bi bi-telephone"></i>
          <span>{telephoneText}</span>
        </a>
        <a href={`mailto:${email}`} className={styles.mail}>
          <i className="bi bi-envelope"></i>
          <span>{email}</span>
        </a>

        <a href={storeLink} className={styles.storeLink}>
          <i className="bi bi-box-arrow-up-right"></i>
          {storeText}
        </a>
      </div>
    </div>
  )
}

export default Topbar
