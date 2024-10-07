import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import GoogleIcon from "../../icons/google";
import FacebookIcon from "../../icons/facebook";
const CreateAccount = () => {
  return (
    <>
      <div className={styles.create_account}>
        <div className={styles.ca_wrapper}>
          <div className={styles.caw_title}>
            <h2>Create an Account</h2>
            <p>
              Have an Account?{" "}
              <span>
                <Link to={"/"}>Sign In</Link>
              </span>
            </p>
          </div>
          <div className={styles.caw_form}>
            <div className={styles.cawf_email}>
              <label>Email</label>
              <input type="email" placeholder="Enter Email Address" />
            </div>
            <div className={styles.cawf_password}>
              <label>Password</label>
              <input type="password" placeholder="Create Password" />
            </div>
          </div>
          <div className={styles.caw_createbtn}>
            <button>Create Account</button>
            <span>By creating account, you agree to our</span>
            <Link>Terms of Service</Link>
          </div>
          <div className={styles.caw_socialLink}>
            <p>Or create an account using:</p>
            <div className={styles.cs_google}>
              <span>
                <GoogleIcon />
              </span>
              <Link>Continue with Google</Link>
            </div>
            <div className={styles.cs_google}>
              <span>
                <FacebookIcon />
              </span>
              <Link>Continue with Facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateAccount;
