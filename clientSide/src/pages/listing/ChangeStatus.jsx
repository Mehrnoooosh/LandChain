import { Button, DatePicker, Form, Input, Modal, Radio } from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFormData, request, sendAlert } from "../../module/util";

export const ChangeStatus = ({ show, setShow, title, data, setData }) => {
  const [status, setStatus] = useState("");
  const [form] = useForm();
  const navigate = useNavigate();
  const close = () => {
    setShow(false);
    setData({});
    form.resetFields();
  };
  useEffect(() => {
    if (show && data) {
      form.setFieldsValue(data);
    }
  }, [show]);

  const handleSubmit = async (values) => {
    if (values["sale_date"])
      values.sale_date = moment(values.sale_date).format("YYYY-MM-DD");
    values = getFormData(values);
    let response = await request(`/listing?id=${data["id"]}`, "POST", values);
    if (response["msg"]) {
      sendAlert(response["success"] ? true : false, response["msg"]);
      if (response["success"]) {
        navigate(`/listing`);
        close();
      }
    } else if (response["error"]) sendAlert(false, response["error"]);
  };

  return (
    <div>
      {show ? (
        <Modal
          title={title}
          centered
          open={show}
          onCancel={close}
          form={form}
          footer={
            <Button
              onClick={form.submit}
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              Save
            </Button>
          }
        >
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              label="Status"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please input status",
                },
              ]}
            >
              <Radio.Group
                onChange={(e) => {
                  setStatus(e.target.value);
                  if (e.target.value == 1)
                    form.setFieldsValue({ sale_price: null, sale_date: null });
                }}
                options={[
                  { value: 1, label: "Delist" },
                  { value: 2, label: "Sold" },
                ]}
              />
            </Form.Item>
            {status == 2 ? (
              <>
                <Form.Item label="Sold Price" name="sale_price">
                  <Input />
                </Form.Item>
                <Form.Item label="Sold Date" name="sale_date">
                  <DatePicker className="ant-input" />
                </Form.Item>
              </>
            ) : (
              ""
            )}
          </Form>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
