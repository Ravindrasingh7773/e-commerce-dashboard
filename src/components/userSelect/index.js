import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const UserSelect = () => {
  return (
    <Link className={styles.user_data} to={"/createAccount"} >
      <div className={styles.user_name_logo}>R</div>
      <div className={styles.user_name}>
        <span>Ravindra Singh </span>
      </div>
    </Link>
  );
};

export default UserSelect;
