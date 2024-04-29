import styles from "./Hero.module.css"
import heroImg from "../../../assets/images/Image (7).png"
import heroImg2 from "../../../assets/images/Button (3).png"
import heroImg3 from "../../../assets/images/Button (1).png"

const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.topLeftContent}>
            <h1>Digital Solutions That Drive Success</h1>
            <p>
              At NexGen, we believe in the transformative power of digital solutions. Our
              team of experts is dedicated to helping businesses like yours thrive in the
              fast-paced digital landscape.
            </p>
            <div className={styles.about}>
              <div className={styles.orangeCircle} />
              <div className={styles.text}>rketing</div>
              <div className={styles.orangeCircle} />
              <div className={styles.text}>rketing</div>
              <div className={styles.orangeCircle} />
              <div className={styles.text}>rketing</div>
              <div className={styles.orangeCircle} />
              <div className={styles.text}>rketing</div>
              <div className={styles.orangeCircle} />
              <div className={styles.text}>rketing</div>
              <div className={styles.orangeCircle} />
              <div className={styles.text}>rketing</div>
              <div className={styles.orangeCircle} />
              <div className={styles.text}>rketing</div>
              <div className={styles.orangeCircle} />
            </div>
          </div>
          <div className={styles.topRightContent}>
            <div className={styles.heroImg}>
              <img src={heroImg2} alt="Hero" />
              <img src={heroImg} alt="Hero" />
            </div>
            <h4>Estatein Real Estate</h4>
            <div>Web Development.</div>
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h4>Client</h4>
              <h3>200+</h3>
            </div>
            <div className={styles.box}>
              <h4>Projects</h4>
              <h3>280+</h3>
            </div>
            <div className={styles.box}>
              <h4>Happy Clients</h4>
              <h3>100%</h3>
            </div>
            <div className={styles.box}>
              <h4>Followers</h4>
              <h3>420k</h3>
            </div>
            <div className={styles.box}>
              <h4>Reviews</h4>
              <h3>1k+</h3>
            </div>
            <div className={styles.box}>
              <h4>Rating</h4>
              <h3>10/10</h3>
            </div>
            <div className={styles.box}>
              <h4>Years Of Experience</h4>
              <h3>10+</h3>
            </div>
            <div className={`${styles.box} ${styles.more}`}>
              <img src={heroImg3} alt="" />
              <h4>Know More</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
