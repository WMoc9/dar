import React from "react";
import { Button, Flex } from "antd";
import classes from "./CustomButton.module.css";
const CustoButton = ({ type, title }) => (
  <Flex className={classes.flex__container} gap="small" wrap>
    <Button className={classes.btn} type={type}>
      {title}
    </Button>
  </Flex>
);
export default CustoButton;
