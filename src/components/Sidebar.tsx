import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks";
import Logo from "./Logo";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {

  const { sidebar } =  useAppSelector(state => state);

  const menu_sidebar = [
    {
      name: "Dashboard",
      path: "/",
      icon: <i className="fa-solid fa-gauge" />,
    },
    {
      name: "Sensors",
      path: "/sensors",
      icon: <i className="fa-solid fa-temperature-half"/>,
    },
    {
      name: "Light",
      path: "/light",
      icon: <i className="fa-solid fa-lightbulb" />,
    },
    {
      name: "Battery",
      path: "/battery",
      icon: <i className="fa-solid fa-car-battery" />,
    },
  ];

  return (
    <div className={[styles.Sidebar, sidebar.isActive ? styles.SidebarActive :"" ].join(" ")}>
      <Logo />
      <div className={styles.Menu}>
        {menu_sidebar.map((item: any, index: any) => {
          return (
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return [styles.Item, isActive ? styles.Active : ""].join(" ");
              }}
              key={index}
            >
              <div>{item.icon}</div>

              <div>{item.name}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
