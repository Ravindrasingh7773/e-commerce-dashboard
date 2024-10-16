import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import image1 from "../../assets/images/cate1.png";
import EditIcon from "../../icons/edit";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className={styles.categories}>
      <MainDashboardHeading
        title={"Categories"}
        fillBtn={true}
        title2={"Add Category"}
        FillTitle={"Add Category"} 
      />
      <div className={styles.c_cateProduct}>
        <div className={styles.cc_inner}>
          <div className={styles.cci_image}>
            <div className={styles.c_categoriesimg}>
              <img src={image1} />
              <Link to={"/createCategories"} className={styles.cci_edit}>
                <span>
                  <EditIcon />
                </span>
                <span>Edit</span>
              </Link>
            </div>
            <div className={styles.ccii_title}>
              <h5>Men Clothes</h5>
              <span>24 items</span>
            </div>
          </div>
          <div className={styles.cci_image}>
            <div className={styles.c_categoriesimg}>
              <img src={image1} />
              <div className={styles.cci_edit}>
                <span>
                  <EditIcon />
                </span>
                <span>Edit</span>
              </div>
            </div>
            <div className={styles.ccii_title}>
              <h5>Men Clothes</h5>
              <span>24 items</span>
            </div>
          </div>
          <div className={styles.cci_image}>
            <div className={styles.c_categoriesimg}>
              <img src={image1} />
              <div className={styles.cci_edit}>
                <span>
                  <EditIcon />
                </span>
                <span>Edit</span>
              </div>
            </div>
            <div className={styles.ccii_title}>
              <h5>Men Clothes</h5>
              <span>24 items</span>
            </div>
          </div>
          <div className={styles.cci_image}>
            <div className={styles.c_categoriesimg}>
              <img src={image1} />
              <div className={styles.cci_edit}>
                <span>
                  <EditIcon />
                </span>
                <span>Edit</span>
              </div>
            </div>
            <div className={styles.ccii_title}>
              <h5>Men Clothes</h5>
              <span>24 items</span>
            </div>
          </div>
          <div className={styles.cci_image}>
            <div className={styles.c_categoriesimg}>
              <img src={image1} />
              <div className={styles.cci_edit}>
                <span>
                  <EditIcon />
                </span>
                <span>Edit</span>
              </div>
            </div>
            <div className={styles.ccii_title}>
              <h5>Men Clothes</h5>
              <span>24 items</span>
            </div>
          </div>
          <div className={styles.cci_image}>
            <div className={styles.c_categoriesimg}>
              <img src={image1} />
              <div className={styles.cci_edit}>
                <span>
                  <EditIcon />
                </span>
                <span>Edit</span>
              </div>
            </div>
            <div className={styles.ccii_title}>
              <h5>Men Clothes</h5>
              <span>24 items</span>
            </div>
          </div>
          <div className={styles.cci_image}>
            <div className={styles.c_categoriesimg}>
              <img src={image1} />
              <div className={styles.cci_edit}>
                <span>
                  <EditIcon />
                </span>
                <span>Edit</span>
              </div>
            </div>
            <div className={styles.ccii_title}>
              <h5>Men Clothes</h5>
              <span>24 items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
