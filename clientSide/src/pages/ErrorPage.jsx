import { Card, Typography } from "antd";
import React from "react";

export default function ErrorPage() {
  const { Title, Text } = Typography;
  return (
    <div className="" id="error-page">
      <Card bordered={false} className="Default size card text-center">
        <Title level={1}>Not Found (#404)</Title>
        <Title level={4}>No page found.</Title>
      </Card>
    </div>
  );
}
