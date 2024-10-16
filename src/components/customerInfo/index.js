import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
const CustomerInfo = () => {
  return (
    <div className={styles.customer_info}>
      <MainDashboardHeading
        title={"Customer Information"}
        fillBtn={true}
        outlineBtn={true}
        title1={"Cancel"}
        title2={"Save"}
        icon={false}
      />
      <div className={styles.ci_wrapper}>
        <div className={styles.ciw_inner}>
          <div className={styles.ciw_userInfo}>
            <div className={styles.ciwu_wrapper}>
              <div className={styles.ciwuw_userName}>
                <div className={styles.ciwuwu_inner}>
                  <div className={styles.ciwuwui_name1}>R</div>
                  <div className={styles.ciwuwui_name2}>
                    <p>Randhir Kumar</p>
                    <span>
                      India <br /> 5 Orders
                      <br /> Customer for 2 years
                    </span>
                  </div>
                  <div className={styles.ciwuwui_name3}>★★★★☆</div>
                </div>
                <h4>Customer Notes</h4>
                <div className={styles.ciwi_notes}>
                  <label>Notes</label>
                  <textarea placeholder="Add notes about customer"></textarea>
                </div>
              </div>
              <div className={styles.ciwuw_order}>
                <div className={styles.drt_recent}>
                  <h5>Customer Orders</h5>
                  <table>
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Order Status</th>
                      <th>Price</th>
                    </tr>
                    <tr>
                      <td>#23534D</td>
                      <td>May 25, 3:12 PM</td>
                      <td className={styles.anandtr}>Pending</td>
                      <td>$124.97</td>
                    </tr>
                    <tr>
                      <td>#23534D</td>

                      <td>24.05.2023</td>
                      <td className={styles.jagarnathtr}>Completed</td>
                      <td>$124.97</td>
                    </tr>
                    <tr>
                      <td>#23534D</td>

                      <td>24.05.2023</td>
                      <td className={styles.jagarnathtr}>Completed</td>
                      <td>$124.97</td>
                    </tr>
                    <tr>
                      <td>#23534D</td>

                      <td>24.05.2023</td>
                      <td className={styles.jagarnathtr}>Completed</td>
                      <td>$124.97</td>
                    </tr>
                    <tr>
                      <td>#23534D</td>

                      <td>24.05.2023</td>
                      <td className={styles.jagarnathtr}>Completed</td>
                      <td>$124.97</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ciw_overView}>
            <div className={styles.ciwov_overview}>
              <div className={styles.ciwovo_edit}>
                <h5>Overview</h5>
                <span>Edit</span>
              </div>
              <div className={styles.ciwov_address}>
                <span>Address</span>
                <p>
                  Panapur langa <br /> Hajipur,vaishali
                  <br /> 844124
                  <br /> India
                </p>
              </div>
              <div className={styles.ciwov_address}>
                <span>Email Address</span>
                <p>randhirppl@gmail.com</p>
              </div>
              <div className={styles.ciwov_address}>
                <span>Phone</span>
                <p>+91 8804789764</p>
              </div>
              <hr />
              <div className={styles.ciwovo_delete}>Delete Customer</div>
            </div>
            <div className={styles.ciwov_overview}>
              <h5>Tags</h5>
              <div className={styles.co_addtage}>
                <label>Add Tags</label>
                <input type="text" placeholder="Enter tag name" />
              </div>
              <p>
                <span>Vip Customer X</span>
                <span>Europe X</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ci_footer}>
        <hr />
        <MainDashboardHeading
          fillBtn={true}
          outlineBtn={true}
          title1={"Cancel"}
          title2={"Save"}
          icon={false}
        />
      </div>
    </div>
  );
};
export default CustomerInfo;
