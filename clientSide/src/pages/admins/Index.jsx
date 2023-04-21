import { Button, Divider, Table } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Filters from "../../components/Filters";
import { confirm, request } from "../../module/util";
import { SaveAdmin } from "./Save";

export const Admins = () => {
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [model, setModel] = useState([
    {
      id: 1,
      email: "fatemeh.alipour7091@gmail.com",
    },
  ]); //example data
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalTitle, setModalTitle] = useState("");

  const [data, setData] = useState([]);
  const getData = (params) => {
    request(`/admins?${params}`).then((res) => {
      if (res["data"]) setModel(res["data"]);
    });
  };
  useEffect(() => {
    let newData = [];
    model.map((item, k) => {
      newData.push({
        key: ++k,
        id: <span>{item.id}</span>,
        email: <span>{item.email}</span>,
        action: (
          <div>
            <Button type="danger" onClick={() => handleDisabled(item)}>
              Disable
            </Button>
          </div>
        ),
      });
    });
    setData(newData);
  }, [model]);
  const handleDisabled = (item) => {
    confirm().then((res) => {
      let data = new FormData();
      data.append("id", item.id);
      request(`/admins`, "PUT", data).then((res) => {
        if (res["data"]) navigate("/");
      });
    });
  };
  const filters = [
    { name: "id", type: "text", label: "ID" },
    { name: "email", type: "text", label: "email" },
  ];
  const handleModal = (data, edit = false) => {
    setModalData(data);
    setShowModal(true);
    setModalTitle(`Create new admin`);
  };
  return (
    <>
      <Filters fields={filters} getData={getData} />
      <Divider />
      <Button type="primary" className="ma-5" onClick={() => handleModal({})}>
        Create new admin
      </Button>
      <div className="table-responsive">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="ant-border-space"
        />
      </div>
      <SaveAdmin
        show={showModal}
        setShow={setShowModal}
        title={modalTitle}
        data={modalData}
        setData={setModalData}
      />
    </>
  );
};
