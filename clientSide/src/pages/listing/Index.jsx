import { Button, Divider, Table } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Filters from "../../components/Filters";
import { request } from "../../module/util";
import { ChangeStatus } from "./ChangeStatus";

export const Listing = () => {
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
      title: "List price",
      dataIndex: "list_price",
    },
    {
      title: "Maintenance fee",
      dataIndex: "maintenance_fee",
    },
    {
      title: "action",
      dataIndex: "action",
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [model, setModel] = useState([
    {
      id: 1,
      address: "8 Eglinton Ave",
      list_price: "1,100,000",
      maintenance_fee: "1050",
    },
    {
      id: 2,
      address: "7890 Bathurst st",
      list_price: "750,000",
      maintenance_fee: "925",
    },
    {
      id: 3,
      address: "66 Forest Manor Rd",
      list_price: "900,000",
      maintenance_fee: "870",
    },
    {
      id: 4,
      address: "121 King St W",
      list_price: "990,000",
      maintenance_fee: "800",
    },
    {
      id: 5,
      address: "86 Dalhousie St",
      list_price: "1,050,000",
      maintenance_fee: "660",
    },
  ]); //example data
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalTitle, setModalTitle] = useState("");

  const [data, setData] = useState([]);
  const getData = (params) => {
    request(`/listing?${params}`).then((res) => {
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
        list_price: <span>{item.list_price}</span>,
        maintenance_fee: <span>{item.maintenance_fee}</span>,
        action: (
          <div>
            <Button className="btn-success" onClick={() => handleModal(item)}>
              Change Status
            </Button>
          </div>
        ),
      });
    });
    setData(newData);
  }, [model]);

  const filters = [{ name: "address", type: "text", label: "address" }];
  const handleModal = (data) => {
    setModalData(data);
    setShowModal(true);
    setModalTitle(`Change status`);
  };
  return (
    <>
      <Filters fields={filters} getData={getData} />
      <Divider />
      <Link to="create">
        <Button type="primary" className="ma-5" onClick={() => handleModal({})}>
          Add New Listing
        </Button>
      </Link>
      <div className="table-responsive">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="ant-border-space"
        />
      </div>
      <ChangeStatus
        show={showModal}
        setShow={setShowModal}
        title={modalTitle}
        data={modalData}
        setData={setModalData}
      />
    </>
  );
};
