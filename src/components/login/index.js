import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import GoogleIcon from "../../icons/google";
import FacebookIcon from "../../icons/facebook";
const Login = () => {
  return (
    <>
      <div className={styles.create_account}>
        <div className={styles.ca_wrapper}>
          <div className={styles.caw_title}>
            <h2>Sign In</h2>
            <p>
              New to Our Product?
              <span>
                <Link to={"/"}>Create an Account</Link>
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
            <div className={styles.cawf_checkbox}>
              <input type="checkbox" />
              <span>Keep me signed in</span>
            </div>
          </div>
          <div className={styles.caw_createbtn}>
            <button>Create Account</button>
            <Link>Forgot your password?</Link>
          </div>
          <div className={styles.caw_socialLink}>
            <p>Or sign in using:</p>
            <div className={styles.cs_google}>
              <Link>
                <span>
                  <GoogleIcon />
                </span>
                Continue with Google
              </Link>
            </div>
            <div className={styles.cs_google}>
              <Link>
                {" "}
                <span>
                  <FacebookIcon />
                </span>
                Continue with Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
