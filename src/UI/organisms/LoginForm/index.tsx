import { Button, Form, FormProps, Input, Spin, Typography } from "antd";
import "./styles.scss";
import Logo from "../../atoms/Logo";
import { useBoundStore } from "../../../store";
import { useMutation } from "@tanstack/react-query";
import { signInUser } from "../../../services/authService";
import { Link, useNavigate } from "react-router";
import useDesignToken from "../../../hooks/useDesignToken";
import { LoginFormProps } from "../../../interfaces/UI/organisms";

interface LoginFormValues {
	username: string;
	password: string;
}

export default function LoginForm(props: LoginFormProps) {
	const token = useDesignToken();
	const { setUser } = useBoundStore();
	const navigate = useNavigate();
	const { mutate: signInUserMutate, isPending } = useMutation({
		mutationFn: signInUser,
		onSuccess(data) {
			setUser(data);
			if (props.next) {
				navigate(props.next);
			} else {
				navigate("/");
			}
		},
	});
	const onFinish: FormProps<LoginFormValues>["onFinish"] = async (values) => {
		signInUserMutate(values);
	};
	return (
		<Form
			layout="vertical"
			className="login-form"
			style={{
				backgroundColor: token.colorBgLayout,
				boxShadow: token.boxShadow,
			}}
			onFinish={onFinish}
		>
			<Spin spinning={isPending} fullscreen />
			<div onClick={() => navigate("/")} className="login-form__logo-container">
				<Logo />
			</div>
			<Typography.Title level={2} className="login-form__title">
				Sign In
			</Typography.Title>
			<Form.Item
				required
				name="username"
				label="Username"
				className="register-form__input-container"
				rules={[{ required: true, message: "Please enter a valid username" }]}
			>
				<Input required placeholder="username" />
			</Form.Item>
			<Form.Item
				required
				name="password"
				label="Password"
				className="register-form__input-container"
				rules={[{ required: true, message: "Please enter a valid password" }]}
			>
				<Input required placeholder="password" type="password" />
			</Form.Item>

			<Form.Item label={null}>
				<div className="login-form__footer">
					<Button type="primary" htmlType="submit">
						Sign In
					</Button>

					<p>or</p>
					<Link to={"/sign-up"}>Create an Account</Link>
				</div>
			</Form.Item>
		</Form>
	);
}
