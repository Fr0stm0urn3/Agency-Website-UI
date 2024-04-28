import styles from "./FooterHeader.module.css"
import followImg from "../../../assets/images/Button (1).png"

const FooterHeader = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>
            Take the first step towards digital success with NexGen by your side. Our team
            of experts is eager to craft tailored solutions that drive growth for your
            business.
          </p>
        </div>
        <button>
          Get in Touch <img src={followImg} alt="" />
        </button>
      </div>
      <div className={styles.follow}>
        <div>Follow us on social media</div>
        <div className={styles.orangeCircle}></div>
        <div>Follow us on social media</div>
        <div className={styles.orangeCircle}></div>
        <div>Follow us on social media</div>
        <div className={styles.orangeCircle}></div>
        <div>Follow us on social media</div>
        <div className={styles.orangeCircle}></div>
        <div>Follow us on social media</div>
        <div className={styles.orangeCircle}></div>
        <div>Follow us on social media</div>
        <div className={styles.orangeCircle}></div>
        <div>Follow us on social media</div>
      </div>
    </>
  )
}

export default FooterHeader
