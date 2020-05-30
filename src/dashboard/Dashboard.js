import React, { useEffect } from "react";
import { PageHeader } from "antd";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useHistory, useLocation, Switch, Route } from "react-router-dom";

const { SubMenu } = Menu;

const Dashboard = () => {
  const [current, setCurrent] = React.useState("mail");

  let history = useHistory();
  let location = useLocation();

  /**
   * Performs Navigation
   *
   * @param {Object} e The event object
   * @return Nothing
   */
  const handleClick = (e) => {
    console.log("click ", e);
    let newPath = "";
    switch (e.key) {
      case "mail":
        newPath = "/dashboard/mail";
        break;
      case "app":
        newPath = "/dashboard/app";
        break;
      case "setting:1":
        newPath = "/dashboard/setting-1";
        break;
      case "setting:2":
        newPath = "/dashboard/setting-2";
        break;
      case "setting:3":
        newPath = "/dashboard/setting-3";
        break;
      case "setting:4":
        newPath = "/dashboard/setting-4";
        break;

      default:
        newPath = "/dashboard/alipay";
        break;
    }
    history.push( newPath);
  };

  useEffect(() => {
    console.log("Dashboard");
  }, []);
  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>

      
    </>
  );
};

export default Dashboard;

{
  /* <PageHeader
  className="site-page-header"
  onBack={() => null}
  title="Title"
  subTitle="This is a subtitle"
/> */
}
