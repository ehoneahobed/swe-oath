import React, { useState } from "react";
import styles from "../styles/OathForm.module.css";

const OathForm = ({ onSigned }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSigned(fullName, email, country);
    setFullName("");
    setEmail("");
    setCountry("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign the Oath</h2>
      <section className={styles.innerContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.input_label} htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.input_label} htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.input_label} htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign Oath
          </button>
        </form>
      </section>
    </div>
  );
};

export default OathForm;
