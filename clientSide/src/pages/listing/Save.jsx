import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UploadFile } from "../../components/UploadFile";
import { getFormData, request, sendAlert } from "../../module/util";
import web3 from '../../web3';
const { Item } = Form;

export const SaveList = () => {

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {


    if(window.ethereum){
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        sendAlert(true, 'You are charging from your wallet with address: ' + result[0]);

        const contractAbi = {};
        const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const accounts = web3.eth.getAccounts();
        contract.methods.recordTransaction(values).send({ from: accounts[0], gas: 100000 });

        navigate(`/listing`);
      })
  } else{
    sendAlert(false, 'Please Install MetaMask');
  }



    console.log(values);
    values = getFormData(values);
    let response = await request("/listing", "POST", values);
    if (response["msg"]) {
      sendAlert(response["success"] ? true : false, response["msg"]);
      if (response["success"]) {
        navigate(`/listing`);
      }
    } else if (response["error"]) sendAlert(false, response["error"]);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div className="pa-3">
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="row-col"
        scrollToFirstError={true}
      >
        <Row>
          <Col className="pr-2" md={8} lg={8} sm={24} xs={24}>
            <Item name={"address"} label="Address">
              <Input />
            </Item>
          </Col>
          <Col className="pr-2" md={8} lg={8} sm={24} xs={24}>
            <Item name={"postal_code"} label="Postal Code">
              <Input />
            </Item>
          </Col>
          <Col className="pr-2" md={8} lg={8} sm={24} xs={24}>
            <Item name={"list_price"} label="Listed Price">
              <Input />
            </Item>
          </Col>
          <Col className="pr-2" md={8} lg={8} sm={24} xs={24}>
            <Item name={"maintenance_fee"} label="Maintenance Fee">
              <Input />
            </Item>
          </Col>
        </Row>
        <Item name="gallery">
          <UploadFile multiple={true} />
        </Item>
        <Item className="text-center mt-5">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "25%" }}
          >
            Save
          </Button>
        </Item>
      </Form>
    </div>
  );
};
