import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
import classes from "./DropDownItem.module.css";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const DropDownItem = ({ dropTitle }) => (
  <Space wrap>
    <Dropdown menu={menuProps} className={classes.dropDown__menu}>
      <Button>
        <Space className={classes.dropDown__space}>
          {dropTitle}
          <DownOutlined className={classes.dropDown__arrow} />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);
export default DropDownItem;
