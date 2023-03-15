import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_block}>
        <div>
          <h2>Multimart</h2>
          <p className={styles.footer_p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          </p>
        </div>
      </div>
      <div className={styles.footer_block}>
        <div className={styles.footer_box}>
          <h2>Quick Links</h2>
          <div>Mobile Phones</div>
          <div>Sofas</div>
          <div>Armchairs</div>
          <div>Smart Watch</div>
        </div>
      </div>
      <div className={styles.footer_block}>
        <div className={styles.footer_box}>
          <h2>Quick Links</h2>
          <div>Mobile Phones</div>
          <div>Sofas</div>
          <div>Armchairs</div>
          <div>Smart Watch</div>
        </div>
      </div>
      <div className={styles.footer_block}>
        <div className={styles.footer_box}>
          <h2>Quick Links</h2>
          <div>Mobile Phones</div>
          <div>Sofas</div>
          <div>Armchairs</div>
          <div>Smart Watch</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
