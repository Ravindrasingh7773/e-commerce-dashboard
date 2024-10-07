import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import image from "../../assets/images/complete.png";
const RegistrationComplete = () => {
  return (
    <>
      <div className={styles.create_account}>
        <div className={styles.ca_wrapper}>
          <div className={styles.caw_completeimage}>
            <img src={image} alt="complete image" />
          </div>
          <div className={styles.caw_title}>
            <h2>Almost There!</h2>
            <p>Check your email inbox and confirm your account</p>
          </div>
          <div className={styles.caw_createbtn}></div>
          <div className={styles.caw_socialLink}>
            <p>Didn’t receive any mail?</p>
            <div className={styles.cs_google}>
              <Link>Resend Confirmation</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrationComplete;
