import { InputNumber } from "antd";
import React from "react";
import { p2e } from "../module/util";

export const NumberFormat = (props) => {
  return (
    <InputNumber
      parser={(e) => {
        return p2e(e.replace(/,/g, ""));
      }}
      formatter={(value) =>
        ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",").trim()
      }
      className="ant-input text-right"
      {...props}
    />
  );
};
