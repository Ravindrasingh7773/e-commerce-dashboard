import React from "react";
import logoImg from "../../assets/images/logo-img.png";
import styles from "./style.module.css";
import SearchIcon from "../../icons/searchIcon";
import NotificationIcon from "../../icons/notificationIcon";
import MessageIcon from "../../icons/messageIcon";
import UserSelect from "../userSelect";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_left}>
          <div className={styles.header_logo}>
            <img src={logoImg} alt='logo img' />
          </div>
          <div className={styles.header_search}>
            <SearchIcon />
            <input type='text' placeholder='Search' />
          </div>
        </div>
        <div className={styles.header_right}>
          <div className={styles.hr_icons}>
            <MessageIcon />
            <NotificationIcon />
          </div>
          <UserSelect />
        </div>
      </div>
    </div>
  );
};

export default Header;
