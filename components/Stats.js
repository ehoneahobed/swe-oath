import React from "react";
import styles from '../styles/stats.module.css';
import { faPen, faGlobe, faFeather } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";

const Stats = () => {

  const [signatureCount, setSignatureCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/sign?analytics=true");
        // console.log(response.data);
        setSignatureCount(response.data.signatureCount);
        setCountryCount(response.data.countryCount);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStats();
  }, []);


  return (
    <section className={styles.stats}>
        <div className={styles.stats_header}>
        <h2 className={styles.stats_heading}>Join the movement</h2>
        <p className={styles.stats_subheading}>See how many software engineers have pledged to uphold the SE Ethical Codex</p>
        </div>
      <div className={styles.stats_container}>
        <div className={styles.stats_item}>
        <p>
            <i className={styles.stat_icon}><FontAwesomeIcon icon={faFeather} /></i>
</p>
          <h3 className={styles.stat_number}>{signatureCount}+</h3>
          <p className={styles.stat_text}>Signatures</p>
        </div>
        
        <div className={styles.stats_item}>
            <p className={styles.stat_icon}>
            <i className={styles.stat_icon}><FontAwesomeIcon icon={faGlobe} /></i>
            </p>
          <h3 className={styles.stat_number}>{countryCount}+</h3>
          <p className={styles.stat_text}>Countries</p>
        </div>
      </div>

      {/* <div className={styles.cta_container}>
        <button className={styles.cta_button}>Sign the Oath</button>
    </div> */}


    </section>
  );
};

export default Stats;
