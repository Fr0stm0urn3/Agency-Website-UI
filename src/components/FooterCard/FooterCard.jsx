import followImg from "../../assets/images/Button (1).png"
import styles from "./FooterCard.module.css"

const FooterCard = ({ img, children, title }) => {
  return (
    <div className={styles.footerCard}>
      <div className={styles.header}>
        <img src={img} alt={title} />
        <img src={followImg} alt="Go To.." />
      </div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}

export default FooterCard
