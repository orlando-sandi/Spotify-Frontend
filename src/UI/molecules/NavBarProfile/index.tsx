import { Avatar, Dropdown, Flex } from "antd";
import { useBoundStore } from "../../../store";
import { Link } from "react-router";
import { LogoutOutlined } from "@ant-design/icons";
import useDesignToken from "../../../hooks/useDesignToken";
import "./styles.scss";

export default function NavBarProfile() {
	const user = useBoundStore((state) => state.user);
	const logout = useBoundStore((state) => state.logout);
	const token = useDesignToken();
	if (user) {
		return (
			<Dropdown
				className="navbar-profile"
				menu={{
					title: "hello",
					items: [
						{
							key: "user",
							type: "group",
							label: `Hello ${user.username}!`,
							children: [
								{
									type: "divider",
								},
								{
									key: "logout",
									label: "Logout",
									icon: <LogoutOutlined />,
									onClick: () => {
										logout();
									},
								},
							],
						},
					],
				}}
			>
				<Avatar
					style={{
						cursor: "pointer",
						backgroundColor: token["gold-2"],
						color: "black",
						fontWeight: "bold",
						textTransform: "uppercase",
					}}
				>
					{user.username.charAt(0)}
				</Avatar>
			</Dropdown>
		);
	}

	return (
		<Flex gap="0.5rem">
			<Link className="navbar-profile__link" to="/sign-in">
				Login
			</Link>
			<span
				style={{
					color: "white",
				}}
			>
				|
			</span>
			<Link className="navbar-profile__link" to="/sign-up">
				Create Account
			</Link>
		</Flex>
	);
}
