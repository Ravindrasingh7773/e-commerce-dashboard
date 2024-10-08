import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";
import productItem from "../../data/orders.json";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <>
      <div className={styles.orders}>
        <MainDashboardHeading
          title={"Orders"}
          outlineBtn={true}
          title1={"Export"}
          icon={false}
          fillBtn={true}
        />
        <div className={styles.o_orders_filter}>
          <div className={styles.oof_wrapper}>
            <div className={styles.of_filter_search}>
              <div className={styles.offs_filter}>
                <div className={styles.offsf_filter}>
                  <select>
                    <option>Filter</option>
                  </select>
                </div>
                <div className={styles.offsf_search}>
                  <label for={"text"}>
                    <SearchIcon />
                  </label>
                  <input type="text" id="text" placeholder="Search..." />
                </div>
              </div>
              <div className={styles.offs_remove}>
                <p>
                  <span>
                    <EditIcon />
                  </span>
                  <span>
                    <RemoveIcon />
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.order_details}>
              <div className={styles.order_details1}>
                <table>
                  <tr>
                    <th className={styles.od_head_order}>
                      <input type="checkbox" className={styles.od_check} />
                      Order
                    </th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Payment status</th>
                    <th>Order Status</th>
                    <th>Total</th>
                  </tr>
                  {productItem.map((item, index) => (
                    <tr key={index}>
                      <td className={styles.od_tr_paid3}>
                        <input type="checkbox" className={styles.odtp_check} />
                        {item.order_id}
                      </td>
                      <td>{item.date_time}</td>
                      <td>{item.customer_name}</td>
                      <td className={styles.od_tr_paid1}>
                        <span>{item.payment_status}</span>
                      </td>
                      <td className={styles.od_tr_paid2}>
                        <span>{item.order_status}</span>
                      </td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
            <div className={styles.od_pagination}>
              <div className={styles.odp_page}>
                <ul>
                  <li>
                    <Link>1</Link>
                  </li>
                  <li>
                    <Link>2</Link>
                  </li>{" "}
                  <li>
                    <Link>3</Link>
                  </li>{" "}
                  <li>
                    <Link>4</Link>
                  </li>{" "}
                  <li>
                    <Link>... </Link>
                  </li>
                  <li>
                    <Link>24</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.odp_result}>
                <span>274 Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Orders;
