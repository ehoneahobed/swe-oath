import styles from "../styles/success.module.css";
import Link from "next/link";

const Success = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Congratulations! One more step to go!
      </h2>
      <div className={styles.text}>
      <p className={styles.text}>Please click the link below to sign the document:</p>
      <Link className={styles.anchor} href="https://mphub.odoo.com/sign/document/mail/5/47159bb9-7fb1-4f97-8860-fe2a21cd8426" target="_blank">
        Sign the Document
      </Link>
      <p className={styles.afterLink}>NB: After signing the document, you will receive a copy of the signed document in your email.</p>

      </div>

          </div>
  );
};

export default Success;
