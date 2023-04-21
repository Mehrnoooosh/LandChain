/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Table, Typography } from "antd";
import { useState } from "react";

function Home() {
  const dollor = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z"
        fill="#fff"
      ></path>
      <path
        d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const profile = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        fill="#fff"
      ></path>
      <path
        d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z"
        fill="#fff"
      ></path>
      <path
        d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z"
        fill="#fff"
      ></path>
      <path
        d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z"
        fill="#fff"
      ></path>
    </svg>,
  ];

  const count = [
  //   {
  //     today: "Realtors",
  //     title: "3,200",
  //     persent: "",
  //     icon: profile,
  //     bnb: "bnb2",
  //   },
  //   {
  //     today: "Total Sold",
  //     title: "44",
  //     persent: "",
  //     icon: dollor,
  //     bnb: "bnb2",
  //   },

  //   {
  //     today: "Active Listings",
  //     title: "306",
  //     persent: "",
  //     icon: <VerticalAlignBottomOutlined />,
  //     bnb: "redtext",
  //   },
  //   {
  //     today: "Total Delisted",
  //     title: "100",
  //     persent: "",
  //     icon: <VerticalAlignTopOutlined />,
  //     bnb: "bnb2",
  //   },
  ];
  const count2 = [
    {
      today: "Sold Properties",
      title: "101",
      color: "#f9a620",
    },
    {
      today: "Delisted Properties",
      title: "49",
      color: "#16b3cc",
    },

    {
      today: "Realtors",
      title: "19",
      color: "#13275b",
    },
    {
      today: "Active Listing",
      title: "505",
      color: "#198753",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Sold Price",
      dataIndex: "soldPrice",
    },
    {
      title: "Listed Price",
      dataIndex: "listedPrice",
    }
  ];
  const { Title, Text } = Typography;
  const [data, setData] = useState([
    {
      id: <span>1</span>,
      address: <span>7890 Bathurst st</span>,
      date: <span>2023-04-21</span>,
      soldPrice: <span>750,000</span>,
      listedPrice: <span>760,000</span>
    },
    {
      id: <span>2</span>,
      address: <span>66 Forest Manor Rd</span>,
      date: <span>2023-04-21</span>,
      soldPrice: <span>851,000</span>,
      listedPrice: <span>860,000</span>
    },
    {
      id: <span>3</span>,
      address: <span>8 Eglinton Ave</span>,
      date: <span>2023-04-20</span>,
      soldPrice: <span>1,200,000</span>,
      listedPrice: <span>1,250,000</span>
    },
    {
      id: <span>4</span>,
      address: <span>7900 Bathurst st</span>,
      date: <span>2023-04-19</span>,
      soldPrice: <span>950,000</span>,
      listedPrice: <span>960,000</span>
    },
    {
      id: <span>5</span>,
      address: <span>121 King St W</span>,
      date: <span>2023-04-15</span>,
      soldPrice: <span>850,000</span>,
      listedPrice: <span>860,000</span>
    },
    {
      id: <span>6</span>,
      address: <span>7890 Bathurst st</span>,
      date: <span>2023-04-18</span>,
      soldPrice: <span>750,000</span>,
      listedPrice: <span>760,000</span>
    },
    {
      id: <span>7</span>,
      address: <span>11 Northtown Way</span>,
      date: <span>2023-04-17</span>,
      soldPrice: <span>950,000</span>,
      listedPrice: <span>900,000</span>
    },
    {
      id: <span>8</span>,
      address: <span>86 Dalhousie St</span>,
      date: <span>2023-04-17</span>,
      soldPrice: <span>530,000</span>,
      listedPrice: <span>550,000</span>
    },
    {
      id: <span>9</span>,
      address: <span>7890 Bathurst st</span>,
      date: <span>2023-04-15</span>,
      soldPrice: <span>820,000</span>,
      listedPrice: <span>830,000</span>
    },
    {
      id: <span>10</span>,
      address: <span>17 Barberry place</span>,
      date: <span>2023-04-14</span>,
      soldPrice: <span>650,000</span>,
      listedPrice: <span>660,000</span>
    },
  ]);

  return (
    <>
      <div className="layout-content pa-5">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count2.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card
                bordered={false}
                className="criclebox text-white"
                style={{ backgroundColor: c.color }}
              >
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={24}>
                      <span className="text-white">{c.today}</span>
                      <Title className="text-white" level={3}>
                        {c.title}
                      </Title>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Title level={5}>Recent Activities</Title>
        <div className="table-responsive mt-3">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="ant-border-space"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
