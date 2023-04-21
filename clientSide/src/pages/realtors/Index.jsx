import { Button, Divider, Table } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Filters from "../../components/Filters";
import { confirm, request } from "../../module/util";
import { SaveRealtor } from "./Save";

export const Realtors = () => {
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Realtor Code",
      dataIndex: "realtor_code",
    },
    {
      title: "Name",
      dataIndex: "name",
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
      realtor_code: "132456",
      name: "Realtor 1",
      email: "Realtor1@gmail.com",
    },
    {
      id: 1,
      realtor_code: "548754",
      name: "Realtor 2",
      email: "Realtor2@gmail.com",
    },
    {
      id: 1,
      realtor_code: "987456",
      name: "Realtor 3",
      email: "Realtor3@gmail.com",
    },
    {
      id: 4,
      realtor_code: "549854",
      name: "Realtor 4",
      email: "Realtor4@gmail.com",
    },
  ]); //example data
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalTitle, setModalTitle] = useState("");

  const [data, setData] = useState([]);
  const getData = (params) => {
    request(`/realtors?${params}`).then((res) => {
      if (res["data"]) setModel(res["data"]);
    });
  };
  useEffect(() => {
    let newData = [];
    model.map((item, k) => {
      newData.push({
        key: ++k,
        id: <span>{item.id}</span>,
        realtor_code: <span>{item.realtor_code}</span>,
        name: <span>{item.name}</span>,
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
      request(`/realtors`, "PUT", data).then((res) => {
        if (res["data"]) navigate("/");
      });
    });
  };
  const filters = [
    { name: "code", type: "text", label: "Code" },
    { name: "email", type: "text", label: "email" },
  ];
  const handleModal = (data, edit = false) => {
    setModalData(data);
    setShowModal(true);
    setModalTitle(`Create new realtor`);
  };
  return (
    <>
      <Filters fields={filters} getData={getData} />
      <Divider />
      <Button type="primary" className="ma-5" onClick={() => handleModal({})}>
        Create new realtor
      </Button>
      <div className="table-responsive">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="ant-border-space"
        />
      </div>
      <SaveRealtor
        show={showModal}
        setShow={setShowModal}
        title={modalTitle}
        data={modalData}
        setData={setModalData}
      />
    </>
  );
};
