import { useLocation } from "react-router";
import LoginForm from "../../UI/organisms/LoginForm";
import { useEffect } from "react";
import { message } from "antd";

interface RouteState {
	next?: string;
	message?: boolean;
}
export default function SignIn() {
	const state = useLocation().state as RouteState | null;

	const [messageApi, contextHolder] = message.useMessage({
		maxCount: 1,
	});

	useEffect(() => {
		if (state?.message) {
			messageApi.success(
				"Congratulations! Your account has been created, now you can login with your credentials!",
				5
			);
		}
	}, []);
	return (
		<>
			{contextHolder}
			<LoginForm next={state?.next} />;
		</>
	);
}
