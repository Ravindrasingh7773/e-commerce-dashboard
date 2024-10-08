import React, { Fragment } from 'react'
import Header from '../components/header'
import styles from "./style.module.css"
import SideMenuBar from '../components/sideMenuBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <div className={styles.layout_wrap}>
            <SideMenuBar/>
            <main>
                <Outlet/>
            </main> 
        </div>
    </Fragment>
  )
}

export default Layout