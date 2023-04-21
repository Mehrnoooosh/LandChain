import React from "react";
import { Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function AntdSelect(props) {
  return (
    <Select
      {...props}
      showSearch
      allowClear
      style={{
        direction: "rtl",
        textAlign: "right",
        width: "100%",
        fontFamily: "PeydaWeb",
      }}
      dropdownStyle={{
        direction: "rtl",
        textAlign: "right",
        fontFamily: "PeydaWeb",
      }}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      clearIcon={<CloseOutlined className="danger" />}
    />
  );
}
