import React from "react";
import { Button, Flex } from "antd";
import classes from "./CustomButton.module.css";
const CustoButton = ({ type, title, onClick }) => (
  <Flex className={classes.flex__container} gap="small" wrap>
    <Button className={classes.btn} type={type} onClick={onClick}>
      {title}
    </Button>
  </Flex>
);
export default CustoButton;
