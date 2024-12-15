import { Flex, theme } from "antd";
import { Outlet } from "react-router";
import "./styles.scss";
import useDesignToken from "../../../hooks/useDesignToken";
export default function AuthLayout() {
	const token = useDesignToken();
	return (
		<Flex
			className="auth-layout"
			style={{
				backgroundColor: token.colorPrimary,
			}}
			align="center"
			justify="center"
		>
			<Outlet />
		</Flex>
	);
}
