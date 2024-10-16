import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import styles from './style.module.css';
import SideMenuBar from '../components/sideMenuBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // Define the paths where the layout should not appear
  const excludedPaths = ['/registrationComplete', '/login', '/passwordReset', '/createAccount', '/comfirmaEmail', '/deleteItem'];

  // Check if the current path is excluded
  const isExcludedPath = excludedPaths.includes(location.pathname);

  // Conditionally render the layout
  return (
    <Fragment>
      {!isExcludedPath && (
        <>
          <Header />
          <div className={styles.layout_wrap}>
            <sagar> 
            <SideMenuBar />
            </sagar>
            <main>
              <Outlet />
            </main>
          </div>
        </>
      )}
      {isExcludedPath && (
        <main>
          <Outlet />
        </main>
      )}
    </Fragment>
  );
};

export default Layout;
