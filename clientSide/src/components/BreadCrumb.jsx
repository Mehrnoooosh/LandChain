import { Breadcrumb } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

export const BreadCrumb = ({ data }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink to={"/"}>Dashboard</NavLink>
        </Breadcrumb.Item>
        {data
          ? data.map((item) => (
              <Breadcrumb.Item>
                {item.link ? (
                  <NavLink to={item.link}>{item.name}</NavLink>
                ) : (
                  <span>{item.name}</span>
                )}
              </Breadcrumb.Item>
            ))
          : ""}
      </Breadcrumb>
    </>
  );
};
