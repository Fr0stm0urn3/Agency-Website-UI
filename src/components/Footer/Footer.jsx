import styles from "./Footer.module.css"
import icon1 from "../../assets/images/Icon Container.png"
import icon2 from "../../assets/images/Icon Container (1).png"
import icon3 from "../../assets/images/Icon Container (2).png"
import icon4 from "../../assets/images/Icon Container (3).png"
import FooterCard from "../FooterCard/FooterCard"
import arrowLogo from "../../assets/images/Button (1).png"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.footerCards}>
            <FooterCard title={"Instagram"} img={icon1}>
              Share visually appealing snippets of our latest web projects.
            </FooterCard>
            <FooterCard title={"Twitter"} img={icon2}>
              Tweet about interesting coding challenges you've overcome.
            </FooterCard>
          </div>
          <div className={styles.topContentRight}>
            <div className={styles.listOne}>
              <div className={styles.list}>
                <h3>Home</h3>
                <ul>
                  <li>Why Us</li>
                  <li>About Us</li>
                  <li>Testimonials</li>
                  <li>FAQ's</li>
                </ul>
              </div>
              <div className={styles.list}>
                <h3>Services</h3>
                <ul>
                  <li>Web Development</li>
                  <li>App Development</li>
                  <li>Web Design</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
            </div>
            <div className={styles.listTwo}>
              <div className={styles.list}>
                <h3>Projects</h3>
                <ul>
                  <li>Klothink</li>
                  <li>Zenith</li>
                  <li>Novus</li>
                  <li>Apex</li>
                </ul>
              </div>
              <div className={styles.list}>
                <h3>Blogs</h3>
                <ul>
                  <li>Business</li>
                  <li>
                    Design <span>Soon</span>
                  </li>
                  <li>
                    Development <span>Soon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.footerCards}>
            <FooterCard title={"Dribbble"} img={icon3}>
              Showcase design elements of our web projects.
            </FooterCard>
            <FooterCard title={"Behance"} img={icon4}>
              Create detailed presentations for our projects.
            </FooterCard>
          </div>
          <div className={styles.bottomContentRight}>
            <div className={styles.header}>
              <div>
                <h4>Newsletter</h4>
                <h2>Subscribe to our newsletter</h2>
              </div>
              <div className={styles.headerBottom}>
                <input type="text" placeholder="Enter your email..." />
                <img src={arrowLogo} alt="Go To..." />
              </div>
            </div>

            <div className={styles.rights}>
              <div>&copy; 2024 NextGen. All rights reserved.</div>
              <div>Terms & Conditions || Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
