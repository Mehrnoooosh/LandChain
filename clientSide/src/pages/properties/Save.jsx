import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFormData, request, sendAlert } from "../../module/util";

export const SaveProperties = ({ show, setShow, title, data, setData }) => {
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
    values = getFormData(values);
    let response = await request("/properties", "POST", values);
    if (response["msg"]) {
      sendAlert(response["success"] ? true : false, response["msg"]);
      if (response["success"]) {
        navigate(`/properties`);
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
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input address",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Postal code"
              name="postal_code"
              rules={[{ required: true, message: "Please input postal code" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Construction year"
              name="construction_year"
              rules={[
                { required: true, message: "Please input construction year" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
