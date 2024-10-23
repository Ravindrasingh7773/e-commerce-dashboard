import React from "react";
import MainDashboardHeading from "../mainDashboardHeding";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const AddProducts = () => {
  return (
    <div className={styles.add_products}>
      <MainDashboardHeading
        title={"Add Product"}
        outlineBtn={true}
        title1={"Cancel"}
        icon={false}
        fillBtn={true}
        title2={"Save"}
      />
      <div className={styles.ap_productInfo}>
        <div className={styles.app_wrapper}>
          <div className={styles.aw_information}>
            <div className={styles.awi_warpper}>
              <h5>Information</h5>
              <div className={styles.awiw_productName}>
                <label htmlFor="product-name">Product Name</label>
                <input
                  id="product-name"
                  type="text"
                  placeholder="Summer T-Shirt"
                />
              </div>
              <div className={styles.awiw_productDescription}>
                <label htmlFor="product-description">Product Description</label>
                <textarea
                  id="product-description"
                  placeholder="Product description"></textarea>
              </div>
              <hr />
              <div className={styles.awiw_image}>
                <h5>Images</h5>
                <div className={styles.awiwi_addFile}>
                  <span>Add File</span>
                  <p>Or drag and drop files</p>
                </div>
              </div>
              <hr />
              <div className={styles.awi_price}>
                <h4>Price</h4>
                <div className={styles.ap_productPrice}>
                  <div className={styles.app11}>
                    <label htmlFor="product-price">Product Price</label>
                    <input
                      id="product-price"
                      type="number"
                      placeholder="Enter price"
                    />
                  </div>
                  <div className={styles.app11}>
                    <label htmlFor="discount-price">Discount Price</label>
                    <input
                      id="discount-price"
                      type="number"
                      placeholder="Price at Discount"
                    />
                  </div>
                </div>
                <div className={styles.awi_tex_product}>
                  <span className={styles.atp_btn}></span>
                  <span>Add tax for this product</span>
                </div>
                <hr />
                <div className={styles.awi_differentOf}>
                  <h4>Different Options</h4>
                  <div className={styles.awi_tex_product1}>
                    <span>This product has multiple options</span>
                  </div>
                </div>
                <div className={styles.awi_option}>
                  <h4>Option 1</h4>
                  <div className={styles.awio_size}>
                    <div className={styles.awios_size}>
                      <label htmlFor="size">Size</label>
                      <select id="size">
                        <option>Size</option>
                      </select>
                    </div>
                    <div className={styles.awios_size1}>
                      <label htmlFor="value">Value</label>
                      <p>
                        <span>S X</span>
                        <span>M X</span>
                        <span>L X</span>
                        <span>XL X</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    <button type="button">Add More</button>
                  </p>
                </div>
                <hr />
                <div className={styles.awi_shipping}>
                  <h4>Shipping</h4>
                  <div className={styles.awis_wcounter}>
                    <div className={styles.awisw_weight}>
                      <label htmlFor="weight">Weight</label>
                      <input
                        id="weight"
                        type="number"
                        placeholder="Enter Weight"
                      />
                    </div>
                    <div className={styles.awisw_weight1}>
                      <label htmlFor="country">Country</label>
                      <select id="country">
                        <option>Select Country</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aw_categries}>
            <div className={styles.awc_cate}>
              <h4>Categories</h4>
              <div className={styles.awcc_women}>
                <input type="checkbox" id="women" />
                <label htmlFor="women">Women</label>
              </div>
              <div className={styles.awcc_women}>
                <input type="checkbox" id="men" />
                <label htmlFor="men">Men</label>
              </div>
              <div className={styles.awcc_women}>
                <input type="checkbox" id="tshirt" />
                <label htmlFor="tshirt">T-Shirt</label>
              </div>
              <div className={styles.awcc_women}>
                <input type="checkbox" id="hoodie" />
                <label htmlFor="hoodie">Hoodie</label>
              </div>
              <div className={styles.awcc_women}>
                <input type="checkbox" id="dress" />
                <label htmlFor="dress">Dress</label>
              </div>
              <p>
                <Link>Create New</Link>
              </p>
            </div>
            <div className={styles.awc_tage}>
              <h4>Tags</h4>
              <div className={styles.awct_addTage}>
                <label htmlFor="add-tags">Add Tags</label>
                <input id="add-tags" type="text" placeholder="Enter tag name" />
              </div>
              <span>T-Shirt X</span>
              <span>Men Clothes X</span>
              <span>Summer Collection X</span>
            </div>
            <div className={styles.awc_secSetting}>
              <h4>SEO Settings</h4>
              <div className={styles.awcs_stitle}>
                <label htmlFor="seo-title">Title</label>
                <input id="seo-title" type="text" />
              </div>
              <div className={styles.awcs_stitle1}>
                <label htmlFor="seo-description">Description</label>
                <textarea id="seo-description"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
