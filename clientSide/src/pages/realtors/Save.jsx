import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFormData, request, sendAlert } from "../../module/util";

export const SaveRealtor = ({ show, setShow, title, data, setData }) => {
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
    let response = await request("/realtors", "POST", values);
    if (response["msg"]) {
      sendAlert(response["success"] ? true : false, response["msg"]);
      if (response["success"]) {
        navigate(`/realtors`);
        close();
      }
    } else if (response["error"]) sendAlert(false, response["error"]);
  };
  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    },
  });
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
          // width={1000}
        >
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              label="Realtor code"
              name="realtor_code"
              rules={[
                {
                  required: true,
                  message: "Please input realtor code",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input name",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input email",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 6,
                  message: "Password must be at least 6 characters long!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                { required: true, message: "Please confirm your password!" },
                validateConfirmPassword,
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
