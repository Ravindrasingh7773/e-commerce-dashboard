import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";
import productItem from "../../data/products.json";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
      <div className={styles.orders}>
        <MainDashboardHeading
          title={"Products"}
          outlineBtn={true}
          title1={"Export"}
          title2={"Add Product"}
          icon={false}
          fillBtn={true}
          fillPath={"/addProducts"}
          fillTitle={"Add Product"}
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
                      Product
                    </th>
                    <th>Inventory</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Rating</th>
                  </tr>
                  {productItem.map((item, index) => (
                    <tr key={index}>
                      <td className={styles.od_tr_paid3}>
                        <div className={styles.otp_img}>
                          <img src={item.img} />
                          <h5>
                            <p>{item.name}</p>
                            <span>T-Shirt</span>
                          </h5>
                        </div>
                      </td>
                      <td>{item.stock} in stock</td>
                      <td>{item.color}</td>
                      <td className={styles.od_tr_paid1}>$ : {item.price}</td>
                      <td className={styles.od_tr_paid2}>
                        {item.rating} ({item.votes} votes)
                      </td>
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

export default Products;
