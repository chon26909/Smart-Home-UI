import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../hooks";
import styles from "./DashboardLayout.module.scss";
import { useMediaQuery } from 'react-responsive'
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/slices/sidebar";

const DashboardLayout: FC = () => {

  const dispatch = useDispatch();

  const { isActive } = useAppSelector(state => state.sidebar)

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // useEffect(() => {

  //   console.log("!isTabletOrMobile && !isActive", isTabletOrMobile, isActive);
  //   if (isTabletOrMobile && isActive ) {
  //     dispatch(toggleSidebar());
  //   }

  // }, [])
  if (isTabletOrMobile === false && isActive === false) {
    dispatch(toggleSidebar());
  }
  // if (isTabletOrMobile && isActive) {
  //   dispatch(toggleSidebar());
  // }

  return (
    <div className={styles.Layout}>
      <Sidebar />

      <div className={[styles.ContentWarper, isActive ? styles.SidebarActive : " "].join(" ")}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
