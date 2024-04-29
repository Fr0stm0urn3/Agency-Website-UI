import styles from "./Testimonials.module.css"
import followImg from "../../assets/images/Button (1).png"
import followImg2 from "../../assets/images/Button (2).png"
import profile1 from "../../assets/images/Image (3).png"
import profile2 from "../../assets/images/Image (4).png"
import profile3 from "../../assets/images/Image (5).png"
import profile4 from "../../assets/images/Image (6).png"

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.container}>
      <div className={styles.contentHeader}>
        <h3>Testimonials</h3>
        <button>
          <img src={followImg} alt="" /> All Testimonials
        </button>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <h5>NexGen turned our business around!</h5>
          <p>
            Their digital marketing strategies helped us reach new customers and increase
            our revenue by 30% within just a few months. Highly recommended!
          </p>
          <div className={styles.testimonialProfile}>
            <div className={styles.profileInfo}>
              <img src={profile1} alt="" />
              <div>
                <h6>Sarah Thompson</h6>
                <div>CEO of BlueBloom</div>
              </div>
            </div>
            <img src={followImg2} alt="" />
          </div>
        </div>
        <div className={styles.testimonial}>
          <h5>NexGen turned our business around!</h5>
          <p>
            Their digital marketing strategies helped us reach new customers and increase
            our revenue by 30% within just a few months. Highly recommended!
          </p>
          <div className={styles.testimonialProfile}>
            <div className={styles.profileInfo}>
              <img src={profile2} alt="" />
              <div>
                <h6>Wade Warren</h6>
                <div>Art Director</div>
              </div>
            </div>
            <img src={followImg2} alt="" />
          </div>
        </div>
        <div className={styles.testimonial}>
          <h5>Working with NexGen was a pleasure.</h5>
          <p>
            Their web design team created a stunning website that perfectly captured our
            brand's essence. The feedback from our customers has been overwhelmingly
            positive.
          </p>
          <div className={styles.testimonialProfile}>
            <div className={styles.profileInfo}>
              <img src={profile3} alt="" />
              <div>
                <h6>Lisa Williams</h6>
                <div>CEO of HealthTech</div>
              </div>
            </div>
            <img src={followImg2} alt="" />
          </div>
        </div>
        <div className={styles.testimonial}>
          <h5>NexGen's web design team brought our vision to life.</h5>
          <p>
            Their responsive design ensures our website looks stunning on all devices,
            contributing to increased user engagement.
          </p>
          <div className={styles.testimonialProfile}>
            <div className={styles.profileInfo}>
              <img src={profile4} alt="" />
              <div>
                <h6>Jenifer Lee</h6>
                <div>CEO of Foodie Haven</div>
              </div>
            </div>
            <img src={followImg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
