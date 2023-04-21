import { Button, Divider, Table } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Filters from "../../components/Filters";
import { confirm, request } from "../../module/util";
import { SaveProperties } from "./Save";

export const Properties = () => {
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
      title: "Postal Code",
      dataIndex: "postal_code",
    },
    {
      title: "Construction year",
      dataIndex: "construction_year",
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
      address: "11 Northtown Way",
      postal_code: "S6U 8K8",
      construction_year: "15",
    },
    {
      id: 2,
      address: "121 King St W",
      postal_code: "S6P 7H2",
      construction_year: "12",
    },
    {
      id: 3,
      address: "8 Eglinton Ave",
      postal_code: "S29 4L7",
      construction_year: "15",
    },
    {
      id: 4,
      address: "66 Forest Manor Rd",
      postal_code: "M2J 0B7",
      construction_year: "9",
    },
    {
      id: 5,
      address: "7890 Bathurst st",
      postal_code: "L4J 0J8",
      construction_year: "5",
    },
  ]); //example data
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalTitle, setModalTitle] = useState("");

  const [data, setData] = useState([]);
  const getData = (params) => {
    request(`/properties?${params}`).then((res) => {
      if (res["data"]) setModel(res["data"]);
    });
  };
  useEffect(() => {
    let newData = [];
    model.map((item, k) => {
      newData.push({
        key: ++k,
        id: <span>{item.id}</span>,
        address: <span>{item.address}</span>,
        postal_code: <span>{item.postal_code}</span>,
        construction_year: <span>{item.construction_year}</span>,
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
      request(`/properties/${item.id}`, "PUT", data).then((res) => {
        if (res["data"]) navigate("/");
      });
    });
  };
  const filters = [{ name: "address", type: "text", label: "address" }];
  const handleModal = (data, edit = false) => {
    setModalData(data);
    setShowModal(true);
    setModalTitle(`Create new property`);
  };
  return (
    <>
      <Filters fields={filters} getData={getData} />
      <Divider />
      <Button type="primary" className="ma-5" onClick={() => handleModal({})}>
        Create new property
      </Button>
      <div className="table-responsive">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="ant-border-space"
        />
      </div>
      <SaveProperties
        show={showModal}
        setShow={setShowModal}
        title={modalTitle}
        data={modalData}
        setData={setModalData}
      />
    </>
  );
};
