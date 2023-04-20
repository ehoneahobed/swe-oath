import styles from "../styles/homeoath.module.css";
import { faPen, faGlobe, faFeather } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HomeOath = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2 className={styles.heading}>
            Summarized version of the <br />
            SE Ethical Codex
          </h2>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.subheading}>Integrity</h3>
              <p className={styles.text}>
                As a software engineer, I commit to acting with honesty,
                transparency, and accountability. I won't compromise software
                quality, security, or privacy. I'll report any ethical or legal
                violations I witness and cooperate with any related
                investigations.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-balance-scale"></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.subheading}>Safety and Reliability</h3>
              <p className={styles.text}>
                I will prioritize the safety, reliability, and performance of
                all software I develop or maintain. I will use industry best
                practices to prevent errors and minimize risks to users and
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-lock"></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.subheading}>Transparency</h3>
              <p className={styles.text}>
                I will ensure that all my actions and decisions are transparent
                and communicated clearly to clients, stakeholders, and fellow
                software engineers. I will prioritize honesty and openness in
                all my interactions.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-umbrella"></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.subheading}>Privacy</h3>
              <p className={styles.text}>
                I will prioritize the privacy and security of user data and
                personal information in all software I develop or maintain. I
                will comply with all relevant privacy laws and regulations, and
                I will strive to exceed minimum standards for privacy
                protection.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-lock"></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.subheading}>Responsibility</h3>
              <p className={styles.text}>
                As a responsible software engineer, I prioritize quality,
                security, and accessibility in all aspects of my work. I take
                full ownership of the software I develop or maintain and ensure
                it meets industry standards. I prioritize safety and well-being
                of users and stakeholders and address their concerns promptly.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-umbrella"></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.subheading}>Fairness</h3>
              <p className={styles.text}>
                I will treat all users and stakeholders fairly and impartially,
                regardless of their backgrounds, affiliations, or beliefs. I
                will avoid bias, discrimination, or harassment in all my
                interactions and decisions, and I will seek to promote
                diversity, equity, and inclusion in the software industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-lock"></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.subheading}>Continuous Learning</h3>
              <p className={styles.text}>
                I will prioritize the privacy and security of user data and
                personal information in all software I develop or maintain. I
                will comply with all relevant privacy laws and regulations, and
                I will strive to exceed minimum standards for privacy
                protection.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.summary}>
            <div className={styles.icon}>
              <i className="fas fa-umbrella"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cta_container}>
        <Link href="/oath" className={styles.cta_button}>Sign the Oath</Link>
      </div>
    </div>
  );
};

export default HomeOath;
