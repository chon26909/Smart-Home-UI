import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./DashboardLayout.module.scss";

const DashboardLayout: FC = () => {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      
      <div className={styles.ContentWarper}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
