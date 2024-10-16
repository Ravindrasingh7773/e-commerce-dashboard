import React from "react";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";
import MainDashboardHeading from ".././mainDashboardHeding";
import productItem from "../../data/products.json";
import { Link } from "react-router-dom";
import cutomerData from "../../data/customer.json";
import styles from "./style.module.css";

const Customer = ({ tag, name, area, count, price }) => {
  return (
    <div className={styles.customer}>
      <MainDashboardHeading
        title={"Customers"}
        fillBtn={true}
        outlineBtn={true}
        title1={"Export"}
        title2={"Add Customer"}
        icon={false}
      />
      <div className={styles.c_name}>
        <div className={styles.cn_wrapper}>
          <div className={styles.cnw_All_customers}>
            <button>All Customers</button>
            <button>New Customers</button>
            <button>From Europe</button>
            <button>Returning Customers</button>
          </div>
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
                    Name
                  </th>
                  <th>Location</th>
                  <th>Orders</th>
                  <th>Spent</th>
                </tr> 
                {cutomerData.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.od_tr_paid3}>
                      <div className={styles.otp_img}>
                        <input type="checkbox" />

                        <span>{item.name[0]}</span>
                        <h5>
                          <p>{item.name}</p>
                        </h5>
                      </div>
                    </td>
                    <td>{item.area}</td>
                    <td>{item.count}</td>
                    <td className={styles.od_tr_paid1}>{item.price}</td>
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
  );
};
export default Customer;
