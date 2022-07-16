import { Dropdown, Text, User } from "@nextui-org/react";
import { FC } from "react";
import styles from "./DropdownMenuUser.module.scss";

const DropdownMenuUser: FC = () => {
  return (
    <div className={styles.DropdownMenu}>
      <Dropdown placement="bottom-left">
        <Dropdown.Trigger>
          <User
            className={styles.User}
            bordered
            as="button"
            size="lg"
            color="primary"
            name="Bossza"
            description="@bozssna"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Dropdown.Trigger>
        <Dropdown.Menu color="primary" aria-label="User Actions">
          <Dropdown.Item>แก้ไขโปรไฟล์</Dropdown.Item>
          <Dropdown.Item>กำหนดสิทธิ</Dropdown.Item>
          <Dropdown.Item key="logout" color="error" withDivider>
            ออกจากระบบ
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownMenuUser;
