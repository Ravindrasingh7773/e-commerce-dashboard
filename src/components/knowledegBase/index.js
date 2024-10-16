import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/searchIcon";
import image1 from "../../assets/images/know1.png";
import image2 from "../../assets/images/know2.png";
import image3 from "../../assets/images/know3.png";
import image4 from "../../assets/images/know4.png";
import { Link } from "react-router-dom";
const KnowledgeBase = () => {
  return (
    <div className={styles.knowledge_base}>
      <MainDashboardHeading title={"Knowledge Base"} />
      <div className={styles.kb_help}>
        <div className={styles.kbh_wrapper}>
          <div className={styles.offsf_search}>
            <label for={"text"}>
              <SearchIcon />
            </label>
            <input type="text" id="text" placeholder="Search..." />
          </div>
          <div className={styles.kbhw_gettingstill}>
            <Link to={"/introductionProduct"} className={styles.kbhwg_getting1}>
              <div className={styles.kg_icon}>
                <img src={image1} />
              </div>
              <h5>Getting Started</h5>
              <p>Guide to get started faster</p>
              <p>Video tutorials for beginners</p>
              <p>Moving to Bolt system</p>
              <span>More Tutorials</span>
            </Link>
            <div className={styles.kbhwg_getting1}>
              <div className={styles.kg_icon}>
                <img src={image2} />
              </div>
              <h5>Personal Settings</h5>
              <p>Setting up your profile</p>
              <p>Changing business name</p>
              <p>Changing email address</p>
              <span>More Tutorials</span>
            </div>
            <div className={styles.kbhwg_getting1}>
              <div className={styles.kg_icon}>
                <img src={image3} />
              </div>
              <h5>Billing</h5>
              <p>Payment declined</p>
              <p>Get a refund</p>
              <p>Subscriptions</p>
              <span>More Tutorials</span>
            </div>
            <div className={styles.kbhwg_getting1}>
              <div className={styles.kg_icon}>
                <img src={image4} />
              </div>
              <h5>Commerce</h5>
              <p>Add products</p>
              <p>Selling guide</p>
              <p>Create categories</p>
              <span>More Tutorials</span>
            </div>
          </div>
          <div className={styles.communitForum}>
            <div className={styles.cf_forum}>
              <h5>Community Forum</h5>
              <p>
                Get help from community members, ask any questions and <br />
                get answers faster.
              </p>
              <span>Join Community</span>
            </div>
            <div className={styles.cf_forum}>
              <h5>Webinars</h5>
              <p>
                Join our series of webinars where you can ask questions live
                <br /> and see a presentation.
              </p>
              <span>Register</span>
            </div>
          </div>
          <div className={styles.help_need}>
            <h5>Still Need Help?</h5>
            <p>Get in touch with us and we will be happy to help you out!</p>
            <button>Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KnowledgeBase;
