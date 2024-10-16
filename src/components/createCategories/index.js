import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";
import image1 from "../../assets/images/category1.png";
const CreateCategories = () => {
  return (
    <div className={styles.create_categories}>
      <MainDashboardHeading
        title={"Women Clothes"}
        outlineBtn={true}
        icon={false}
        fillBtn={true}
        title2={"Save"}
        title1={"Cancel"}
      />
      <div className={styles.cc_products_cat}>
        <div className={styles.ccpc_left}>
          <div className={styles.ccpcl_inner}>
            <h4>
              Products<span>12</span>
            </h4>
            <div className={styles.ccpcl_categories}>
              <div className={styles.ccpclc_1}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.ccpclc_2}>
                <img src={image1} />
              </div>
              <div className={styles.ccpclc_3}>Women Striped T-Shirt</div>
              <div className={styles.ccpclc_4}>
                <span>
                  <EditIcon />
                </span>
                <span>
                  <RemoveIcon />
                </span>
              </div>
            </div>
            <div className={styles.ccpcl_addPr}>+ Add Pr</div>
          </div>
        </div>
        <div className={styles.ccpc_right}>
          <div className={styles.ccpcr_inner}>
            <div className={styles.ccpcr_visiblity}>
              <h5>Category Visibility</h5>
              <span></span>
              <span>Visible on site</span>
            </div>
            <div className={styles.ccpcr_catInfo}>
              <h5>Category Info</h5>
              <div className={styles.ccpcrci_women}>
                <label>Category Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.ccpcrc_addProfile}>
                <p>Image</p>
                <div className={styles.ccpc_addImage}>
                  <p>Add File</p>
                  <span>Or drag and drop files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCategories;
