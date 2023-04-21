import { Button, Col, Collapse, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import AntdSelect from "./AntdSelect";
const { Panel } = Collapse;
const Filters = ({ fields, getData, hide_form = false }) => {
  const [form] = Form.useForm();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(0);
  const handleSubmit = (values) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams();
      Object.keys(values).map((key) => {
        if (values[key]) {
          newSearchParams.set(key, values[key]);
        }
      });
      return newSearchParams.toString();
    });
  };
  const resetFilters = () => {
    setSearchParams("");
    form.resetFields();
  };
  useEffect(() => {
    setTimeout(() => {
      getData(searchParams.toString());
    }, 100);
    if (!searchParams.toString()) {
      form.resetFields();
      setActive(0);
    } else {
      setActive(1);
    }
  }, [location]);
  useEffect(() => {
    searchParams.forEach((v, k) => {
      form.setFieldsValue({ [k.replace("[]", "")]: searchParams.getAll(k) });
    });
  }, [searchParams]);
  const onChange = (key) => {
    setActive(key);
  };
  return (
    <>
      {hide_form ? (
        ""
      ) : (
        <Collapse
          activeKey={active}
          onChange={onChange}
          className="ant-collapse ant-collapse-icon-position-start"
        >
          <Panel header={<h3 className="m-0">Filters</h3>} key="1">
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              className="row-col"
            >
              <Row>
                {fields.map((field) => (
                  <Col className="pr-2" md={8} sm={24} xs={24} lg={8}>
                    <Form.Item label={field.label} name={field.name}>
                      {field.type == "select2" ? (
                        <AntdSelect
                          options={field.options}
                          placeholder={field.placeholder}
                          mode={field.mode}
                        />
                      ) : field.type == "text" ? (
                        <Input placeholder={field.label} type={field.type} />
                      ) : (
                        ""
                      )}
                    </Form.Item>
                  </Col>
                ))}
                <Col className="pl-2" md={8} sm={24} xs={24} lg={8}>
                  <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                      Filter
                    </Button>
                    <Button
                      htmlType="button"
                      className="ml-2"
                      onClick={resetFilters}
                    >
                      Empty the filter
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Panel>
        </Collapse>
      )}
    </>
  );
};
export default Filters;
