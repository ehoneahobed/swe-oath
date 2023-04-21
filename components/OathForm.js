import React, { useState } from "react";
import styles from "../styles/OathForm.module.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const OathForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  // const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("/api/sign", {
        fullName,
        email,
        country,
      });
      
      if (response.status === 201) {
        toast.success('Signature created successfully!');
        router.push('/success');
      }

      setFullName("");
      setEmail("");
      setCountry("");



    } catch (error) {
      // setMessage(`Error creating signature: ${error.message}`);
      toast.error('Failed to create signature. Please try again later.');
    }
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
          {/* {message && <p>{message}</p>} */}
          <ToastContainer />
        </form>
      </section>
    </div>
  );
};

export default OathForm;
