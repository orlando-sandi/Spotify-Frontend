import { Layout as AntdLayout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import "./styles.scss";
export default function Layout() {
  return (
    <AntdLayout className="layout">
      <Header></Header>
      <Content className="layout__content">
        <Outlet />
      </Content>
    </AntdLayout>
  );
}
