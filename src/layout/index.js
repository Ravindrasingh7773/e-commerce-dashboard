import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import styles from './style.module.css';
import SideMenuBar from '../components/sideMenuBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
 
  const excludedPaths = ['/registrationComplete', '/login', '/passwordReset', '/createAccount', '/comfirmaEmail', '/deleteItem'];
 
  const isExcludedPath = excludedPaths.includes(location.pathname);
 
  return (
    <Fragment>
      {!isExcludedPath && (
        <>
          <Header />
          <div className={styles.layout_wrap}>
            <span> 
            <SideMenuBar />
            </span>
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
 