import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Button = ({
  to,
  title,
  onClick,
  size,
  type,
  customClass,
  isButton = false,
}) => {
  const commonClass = `${styles.button} ${styles[size]} ${styles[type]}   ${styles[customClass]} `;
  return (
    <>
      {isButton ? (
        <button className={commonClass} onClick={onClick}>
          {title}
        </button>
      ) : (
        <Link
          to={to}
          className={`${commonClass} ${styles.link_button}`}
          onClick={onClick}>
          {title}
        </Link>
      )}
    </>
  );
};

export default Button;
