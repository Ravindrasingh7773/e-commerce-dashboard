import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const ComfirmaEmail = () => {
  return (
    <>
      <div className={styles.create_account}>
        <div className={styles.ca_wrapper}>
          <div className={styles.caw_title}>
            <h2>Confirm Email</h2>
            <p>Check Your Email and Enter Confirmation Code</p>
          </div>
          <div className={styles.caw_form}>
            <div className={styles.cawf_email}>
              <label>Confirmation Code</label>
              <input type="text" placeholder="Enter Code" />
            </div>
          </div>
          <div className={styles.caw_createbtn}>
            <button>Confirm Email</button>
          </div>
          <div className={styles.caw_socialLink}>
            <p>Haven’t received your code?</p>
            <div className={styles.cs_google}>
              <Link>Resend Code</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComfirmaEmail;
