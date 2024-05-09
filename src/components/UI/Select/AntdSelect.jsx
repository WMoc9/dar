import React from "react";
import { ConfigProvider, Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const AntdSelect = () => (
  <ConfigProvider
    theme={{
      components: {
        Select: { borderRadius: "1px", colorBorder: "rgb(217, 217, 217)" },
      },
    }}
  >
    <Select
      defaultValue="lucy"
      style={{
        width: 285,

        bordeRadius: "2px",
        boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",
      }}
      onChange={handleChange}
      options={[
        {
          value: "jack",
          label: "Jack",
        },
        {
          value: "lucy",
          label: "Lucy",
        },
      ]}
    />
  </ConfigProvider>
);
export default AntdSelect;
