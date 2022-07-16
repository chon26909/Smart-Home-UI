import { FC } from "react";
import ToggleSidebar from "./ToggleSidebar";
import styles from "./Navbar.module.scss";
import DropdownMenuUser from "./DropdownMenuUser";
import { Container } from "@nextui-org/react";

const Navbar: FC = () => {
  return (
    <div className={[styles.Navbar, styles.SidebarActive].join(" ")}>
      <Container>
        <div className={styles.NavbarLayout}>
          <div>
            <ToggleSidebar />
            {/* <SearchPage/> */}
          </div>
          <div>
            <DropdownMenuUser />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
