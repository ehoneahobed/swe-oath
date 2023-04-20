import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.about_title}>About SE Ethical Codex</h2>
          <p className={styles.about_subtitle}>
            The SE Ethical Codex is a voluntary commitment by software engineers
            to uphold the highest standards of ethical conduct in their
            profession. It was developed by a team of experts in software
            engineering ethics, in response to growing concerns about the
            potential misuse of technology and the need for greater
            accountability in the field.
          </p>
        </div>

        <div className={styles.about_content}>
          <div className={styles.about_content_image}>
            <Image
              src="/img/about-image.png"
              alt="about image"
              width={1200}
              height={900}
            />
          </div>
          <div className={styles.about_content_text}>
            <p>
              The purpose of the SE Ethical Codex is to provide a clear and
              concise set of guidelines that software engineers can follow to
              ensure that they act in the best interests of their clients, their
              employers, and society as a whole.
            <br /><br />
              Our goal is to promote a culture of ethical conduct in software
              engineering, and to create a community of professionals who are
              committed to upholding the highest standards of integrity and
              responsibility in their work. We believe that by working together,
              we can build a better future for ourselves and for the world
              around us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
