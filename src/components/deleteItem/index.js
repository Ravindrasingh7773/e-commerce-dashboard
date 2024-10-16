import React from "react";
import styles from "./style.module.css";

const DeleteItem = () => {
  return (
    <div className={styles.delete_item}>
      <div className={styles.di_inner}>
        <div className={styles.dii_delete}>
          <span>Delete Items</span>
          <span>X</span>
        </div>
        <p>Are you sure you want to delete 5 selected items?</p>
        <div className={styles.dii_cancel}>
          <span>Cancel</span>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};
export default DeleteItem;
