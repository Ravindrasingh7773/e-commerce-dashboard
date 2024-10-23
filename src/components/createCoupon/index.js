import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import CameraIcon from "../../icons/camera";
import BagIcon from "../../icons/bag";
import CarIcon from "../../icons/car";
import ProductIcon from "../../icons/product";

const CreateCoupon = () => {
  return (
    <div className={styles.createCop}>
      <MainDashboardHeading  
      title={"Create Coupon"}
        outlineBtn={true}
        title1={"Cancel"} 
        icon={false}
        fillIcon={false}
        fillTitle={"Save"}
      />
      <div className={styles.create_coupon}>
        <Formik
          initialValues={{
            code: "",
            couponName: "",
            couponType: "Fixed Discount",
            discountValue: "",
            appliesTo: "",
            duration: "",
            usageLimit: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}>
          <Form>
            <div className={styles.cc_couponInfo}>
              <h2>Coupon Information</h2>
              <p>Code will be used by users in checkout</p>
              <div className={styles.ccc_code_name}>
                <div className={styles.coupon_code}>
                  <label>Coupon Code</label>
                  <Field type="text" name="code" placeholder="Shipfree20" />
                </div>
                <div className={styles.coupon_name}>
                  <label>Coupon Name</label>
                  <Field
                    type="text"
                    name="couponName"
                    placeholder="Free Shipping"
                  />
                </div>
              </div>
              <hr />
              <div className={styles.ccc_coupon_type}>
                <h2>Coupon Type</h2>
                <p>Type of coupon you want to create</p>
                <div className={styles.cccct_discount}>
                  <div className={styles.cccctd1}>
                    <span>
                      <CameraIcon />
                    </span>
                    <p>Fixed Discount</p>
                  </div>
                  <div className={styles.cccctd1}>
                    <span>
                      <BagIcon />
                    </span>
                    <p>Percentage Discount</p>
                  </div>
                  <div className={styles.cccctd1}>
                    <span>
                      <CarIcon />
                    </span>
                    <p>Free Shipping</p>
                  </div>
                  <div className={styles.cccctd1}>
                    <span>
                      <ProductIcon />
                    </span>
                    <p>Price Discount</p>
                  </div>
                </div>
              </div>
              <div className={styles.ccc_code_name}>
                <div className={styles.coupon_code}>
                  <label>Discount Value</label>
                  <Field
                    type="number"
                    name="discountValue"
                    placeholder="Amount"
                  />
                </div>
                <div className={styles.coupon_name}>
                  <label>Applies to</label>
                  <Field type="text" name="appliesTo" placeholder="Choose" />
                </div>
              </div>
              <div className={styles.ccc_code_name}>
                <div className={styles.coupon_code}>
                  <label>Duration</label>
                  <Field
                    type="date"
                    name="duration"
                    placeholder="Set Duration"
                  />
                  <div className={styles.duration_checkbox}>
                    <input type="checkbox" />
                    <span>Don't set duration</span>
                  </div>
                </div>
                <div className={styles.coupon_name}>
                  <label>Usage Limits</label>
                  <Field
                    type="text"
                    name="usageLimit"
                    placeholder="Amount of uses"
                  />
                  <div className={styles.duration_checkbox}>
                    <input type="checkbox" />
                    <span>Don't set usage limit</span>
                  </div>
                </div>
              </div>
            </div>
            <MainDashboardHeading
              fillBtn={true}
              outlineBtn={true}
              title1={"Cancel"}
              title2={"Save"}
              icon={false}
              type={"submit"}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateCoupon;
