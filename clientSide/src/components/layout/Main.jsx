import { Affix, Drawer, Layout } from "antd";
import "antd-css-utilities/utility.min.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../module/routes";
import { AppProvider } from "../AppProvider";
import { Dashboard } from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import Sidenav from "./Sidenav";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [sidenavColor, setSidenavColor] = useState("#1890ff");
  const [sidenavType, setSidenavType] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState("");
  const [subname, setSubname] = useState("");

  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type) => setSidenavType(type);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);
  let location = useLocation();
  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  useEffect(() => {
    routes.map((item) => {
      if (pathname == item.path.replace("/", "")) {
        if (item.breadcrumb) setBreadcrumb(item.breadcrumb);
        if (item.name) setSubname(item.name);
      } else if (item["children"]) {
        item["children"].map((child) => {
          let path = item.path.replace("/", "") + "/" + child.path;
          if (item.custom_children) {
            path = child.path.replace("/", "");
          }
          if (pathname == path) {
            if (child.breadcrumb) setBreadcrumb(child.breadcrumb);
            if (child.name) setSubname(child.name);
          } else if (child["children"]) {
            child["children"].map((child2) => {
              if (pathname == path + "/" + child2.path) {
                if (child2.breadcrumb) setBreadcrumb(child2.breadcrumb);
                if (child2.name) setSubname(child2.name);
              }
            });
          }
        });
      }
    });
    setVisible(false);
  }, [location]);
  return (
    <AppProvider>
      <Layout
        className={`layout-dashboard ${
          pathname === "profile" ? "layout-profile" : ""
        } `}
      >
        <Drawer
          title={false}
          placement={placement === "right" ? "left" : "right"}
          closable={false}
          onClose={() => setVisible(false)}
          open={visible}
          key={placement === "right" ? "left" : "right"}
          width={250}
          className={`drawer-sidebar ${"drawer-sidebar-rtl"} `}
        >
          <Layout className={`layout-dashboard ${"layout-dashboard-rtl"}`}>
            <Sider
              trigger={null}
              width={250}
              theme="light"
              className={`sider-primary ant-layout-sider-primary ${
                sidenavType === "#fff" ? "active-route" : ""
              }`}
              style={{ background: sidenavType }}
            >
              <Sidenav color={sidenavColor} />
            </Sider>
          </Layout>
        </Drawer>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
          trigger={null}
          width={250}
          theme="light"
          className={`sider-primary ant-layout-sider-primary ${
            sidenavType === "#fff" ? "active-route" : ""
          }`}
          style={{ background: sidenavType }}
        >
          <Sidenav color={sidenavColor} />
        </Sider>
        <Layout>
          {fixed ? (
            <Affix>
              <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
                <Header
                  onPress={openDrawer}
                  name={pathname}
                  subName={subname}
                  handleSidenavColor={handleSidenavColor}
                  handleSidenavType={handleSidenavType}
                  handleFixedNavbar={handleFixedNavbar}
                  // breadcrumb={breadcrumb}
                />
              </AntHeader>
            </Affix>
          ) : (
            <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
              <Header
                onPress={openDrawer}
                name={pathname}
                subName={subname}
                handleSidenavColor={handleSidenavColor}
                handleSidenavType={handleSidenavType}
                handleFixedNavbar={handleFixedNavbar}
                breadcrumb={breadcrumb}
              />
            </AntHeader>
          )}
          <Content className="content-ant">
            <Dashboard
              subname={subname}
              breadcrumb={breadcrumb}
              children={children}
            />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </AppProvider>
  );
}

export default Main;
