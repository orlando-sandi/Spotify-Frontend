import { Layout as AntdLayout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import "./styles.scss";
import NavBar from "../../organisms/NavBar";
export default function Layout() {
	return (
		<AntdLayout className="layout">
			<NavBar />
			<Content className="layout__content">
				<Outlet />
			</Content>
		</AntdLayout>
	);
}
