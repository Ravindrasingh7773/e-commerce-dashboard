import React from "react";
import styles from "./style.module.css";
import GlobalSettingIcon from "../../icons/globlSetting";
import { Link } from "react-router-dom";
import PlusIcon from "../../icons/plus";
const MainDashboardHeading = ({
  title,
  icon = true,
  title1,
  outlineBtn,
  fillBtn,
}) => {
  return (
    <>
      <div className={styles.dw_mainTitle}>
        <h4>{title}</h4>
        {outlineBtn && (
          <div className={styles.dwmt_manag}>
            <Link>
              {icon ? (
                <span>
                  <GlobalSettingIcon />
                </span>
              ) : (
                ""
              )}
              <span>{title1}</span>
            </Link>
          </div>
        )}
        {fillBtn && (
          <div className={styles.dwmt_manag2}>
            <Link>
              <span>
                <PlusIcon />
              </span>
              <span>Add Order</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default MainDashboardHeading;
