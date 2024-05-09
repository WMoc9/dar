import React, { useState, useEffect } from "react";
import { ConfigProvider, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeCountry, changeTypeMeal } from "../../../store/filterSlice";

const AntdSelect = ({ options, filterType }) => {
  const dispatch = useDispatch();
  const wasReset = useSelector((state) => state.filters.filtersReset);
  const [currentValue, setCurrentValue] = useState(options[0].value);

  useEffect(() => {
    if (wasReset) {
      setCurrentValue(options[0].value);
    }
  }, [wasReset, options]);

  const handleChange = (value, filterType) => {
    setCurrentValue(value);
    if (filterType === "country") {
      dispatch(changeCountry(value));
    } else if (filterType === "typeMeal") {
      dispatch(changeTypeMeal(value));
    }
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: { borderRadius: "1px", colorBorder: "rgb(217, 217, 217)" },
        },
      }}
    >
      <Select
        defaultValue={options[0].value}
        style={{
          width: 285,
          bordeRadius: "2px",
          boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",
        }}
        onChange={(value) => handleChange(value, filterType)}
        options={options}
        value={currentValue}
      />
    </ConfigProvider>
  );
};
export default AntdSelect;
