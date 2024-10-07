import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import GoogleIcon from "../../icons/google";
import FacebookIcon from "../../icons/facebook";
const PasswordReset = () => {
  return (
    <>
      <div className={styles.create_account}>
        <div className={styles.ca_wrapper}>
          <div className={styles.caw_title}>
            <h2>Password Reset</h2>
            <p>We Will Help You Reset your Password</p>
          </div>
          <div className={styles.caw_form}>
            <div className={styles.cawf_email}>
              <label>Email</label>
              <input type="email" placeholder="Enter Email Address" />
            </div>
          </div>
          <div className={styles.caw_createbtn}>
            <button>Reset Password</button>
          </div>
          <div className={styles.caw_socialLink}>
            <p>Remembered your Password?</p>
            <div className={styles.cs_google}>
              <Link>Back to Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PasswordReset;
