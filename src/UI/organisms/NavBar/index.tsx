import { Header } from "antd/es/layout/layout";
import "./styles.scss";
import Logo from "../../atoms/Logo";

import { useLocation, useNavigate } from "react-router";
import BrandText from "../../atoms/BrandText/BrandText";
import NavBarProfile from "../../molecules/NavBarProfile";
import { Menu } from "antd";
import { routes } from "../../../utils/constants/routes";

export default function NavBar() {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<Header className="nav-bar">
			<div className="nav-bar__brand" onClick={() => navigate("/")}>
				<div className="nav-bar__logo-container">
					<Logo />
				</div>
				<BrandText className="nav-bar__brand-name" />
			</div>

			<Menu
				mode="horizontal"
				theme="dark"
				className="nav-bar__menu"
				selectedKeys={[location.pathname]}
				items={routes.map((route) => ({
					key: route.to,
					label: route.label,
					onClick: () => navigate(route.to),
				}))}
			/>

			<div className="nav-bar__profile">
				<NavBarProfile />
			</div>
		</Header>
	);
}
