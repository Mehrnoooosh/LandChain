import { createBrowserHistory } from "@remix-run/router";
import { Pagination as Pages } from "antd";
import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Pagination = ({ all, page, setPage, getData, no_url = false }) => {
  const location = useLocation();
  const history = createBrowserHistory();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (p) => {
    setPage(p);
    if (no_url) getData(`page=${p}`);
    else
      setSearchParams((prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        newSearchParams.set("page", p);
        return newSearchParams.toString();
      });
  };
  return (
    <Pages
      // style={{ direction: "ltr" }}
      className="text-center ma-4  ant-pagination-rtl"
      hideOnSinglePage
      pageSize={1}
      total={all}
      showSizeChanger={false}
      onChange={onChange}
      responsive
      current={parseInt(page)}
    />
  );
};
export default Pagination;
