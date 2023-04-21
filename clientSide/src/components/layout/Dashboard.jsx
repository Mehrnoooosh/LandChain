import { Card } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../AppProvider";

export const Dashboard = ({ subname, breadcrumb, children }) => {
  const { title, customBreadcrumb } = useAppContext();
  const { pathname } = useLocation();
  return (
    <>
      <Helmet>
        <title>{`Land chain| ${subname} ${title}`}</title>
      </Helmet>

      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title={
          <div>
            <span>{subname + " " + title}</span>
            <div>{customBreadcrumb ? customBreadcrumb : breadcrumb}</div>
          </div>
        }
      >
        {children}
      </Card>
    </>
  );
};
