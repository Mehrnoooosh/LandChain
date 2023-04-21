/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo_black.png";
import routes from "../../module/routes";

function Sidenav({ color }) {
  const { pathname, search } = useLocation();
  const page = pathname;
  const [openKey, setOpenKey] = useState([]);
  const handleCache = () => {
    console.log("click");
  };
  useEffect(() => {
    let path = pathname.split("/")[1];
    let openKey = `sub-${path}`;
    for (const item of routes) {
      if (openKey == `sub-${item.path.replace("/", "")}`) {
        openKey = `sub-${item.path.replace("/", "")}`;
        break;
      } else if (item.children) {
        for (const child of item.children) {
          if (child.path && openKey == `sub-${child.path.replace("/", "")}`) {
            openKey = `sub-${item.path.replace("/", "")}`;
            break;
          }
        }
      }
    }
    setOpenKey([openKey]);
  }, [pathname]);
  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <hr />
      <Menu theme="light" mode="inline" openKeys={openKey}>
        {routes.map((item, k) => (
          <>
            {item.name && !item.no_menu ? (
              <>
                {item.children && !item.no_submenu ? (
                  <SubMenu
                    title={item.name}
                    icon={<span className="icon">{item.icon}</span>}
                    className={"nav-sub-menu "}
                    key={`sub-${item.path.replace("/", "")}`}
                    onTitleClick={(e) => {
                      if (openKey.includes(e["key"])) {
                        setOpenKey([]);
                      } else {
                        setOpenKey([e["key"]]);
                      }
                    }}
                  >
                    {item.children.map((menu, m) => (
                      <Menu.Item
                        key={`sub-${item.path.replace("/", "")}-item-${m}`}
                        className="mr-3"
                      >
                        {!menu.no_menu ? (
                          <>
                            {menu.path ? (
                              <NavLink
                                to={
                                  item.custom_children
                                    ? menu.path
                                    : item.path + "/" + menu.path
                                }
                              >
                                <span
                                  className="icon"
                                  style={{
                                    background: page === menu.path ? color : "",
                                    width: 20,
                                    height: 20,
                                  }}
                                >
                                  <CaretLeftOutlined />
                                </span>
                                <span className="label">{menu.name}</span>
                              </NavLink>
                            ) : (
                              <a
                                onClick={
                                  menu.onClick == "handleCache"
                                    ? handleCache
                                    : ""
                                }
                              >
                                <span
                                  className="icon"
                                  style={{
                                    background: page === menu.path ? color : "",
                                    width: 20,
                                    height: 20,
                                  }}
                                >
                                  <CaretLeftOutlined />
                                </span>
                                <span className="label">{menu.name}</span>
                              </a>
                            )}
                          </>
                        ) : (
                          ""
                        )}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={`items-${k}`}>
                    <NavLink to={item.path}>
                      <span
                        className="icon"
                        style={{
                          background: page === item.path ? color : "",
                        }}
                      >
                        {item.icon}
                      </span>
                      <span className="label">{item.name}</span>
                    </NavLink>
                  </Menu.Item>
                )}
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </Menu>
    </>
  );
}

export default Sidenav;
