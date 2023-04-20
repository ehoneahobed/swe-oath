import React from "react";
import styles from "../styles/hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            Join the Community of Ethical Software Engineers
          </h1>
          <h2 className={styles.hero_subtitle}>
          A Promise to the Future: Taking a Stand for Ethical Software
            Engineering. Sign the SE Ethical Codex and commit to upholding the
            prescribed core values in software engineering.
          </h2>
          <Link href="/oath" class={styles.hero_cta}>Sign the Oath</Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
