import { Button, Form, FormProps, Input, Spin, Typography } from "antd";
import "./styles.scss";
import Logo from "../../atoms/Logo";
import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../../services/authService";
import { Link, useNavigate } from "react-router";
import useDesignToken from "../../../hooks/useDesignToken";

interface RegisterFormValues {
	username: string;
	password: string;
	confirmPassword: string;
}

export default function RegisterForm() {
	const token = useDesignToken();
	const navigate = useNavigate();
	const { mutate: signUpUserMutation, isPending } = useMutation({
		mutationFn: signUpUser,
		onSuccess() {
			navigate("/sign-in", {
				state: {
					message: true,
				},
			});
		},
	});
	const onFinish: FormProps<RegisterFormValues>["onFinish"] = async (
		values
	) => {
		signUpUserMutation(values);
	};
	return (
		<Form
			layout="vertical"
			className="register-form"
			style={{
				backgroundColor: token.colorBgLayout,
				boxShadow: token.boxShadow,
			}}
			onFinish={onFinish}
		>
			<Spin spinning={isPending} fullscreen />
			<div
				onClick={() => navigate("/")}
				className="register-form__logo-container"
			>
				<Logo />
			</div>
			<Typography.Title level={2} className="register-form__">
				Sign Up
			</Typography.Title>
			<Form.Item
				required
				className="register-form__input-container"
				name="username"
				label="Username"
				rules={[{ required: true, message: "Please enter a valid username" }]}
			>
				<Input required placeholder="username" />
			</Form.Item>
			<Form.Item
				required
				name="password"
				label="Password"
				className="register-form__input-container"
				hasFeedback
				rules={[
					{ required: true, message: "Please enter a valid password" },
					{
						min: 8,
						message: "The password must be at least 8 characters long",
					},
				]}
			>
				<Input.Password required placeholder="password" type="password" />
			</Form.Item>

			<Form.Item
				required
				name="confirmPassword"
				label="Confirm Password"
				dependencies={["password"]}
				className="register-form__input-container"
				hasFeedback
				rules={[
					{ required: true, message: "Please enter a valid password" },
					({ getFieldValue }) => ({
						validator: (_, value) => {
							const password = getFieldValue("password");

							if (!value || password === value) {
								return Promise.resolve();
							}
							return Promise.reject(new Error("The passwords do not match"));
						},
					}),
				]}
			>
				<Input.Password required placeholder="Confirm password" />
			</Form.Item>

			<Form.Item label={null}>
				<div className="register-form__footer">
					<Button type="primary" htmlType="submit">
						Sign Up
					</Button>

					<p>or</p>
					<Link to={"/sign-in"}>Login with your account</Link>
				</div>
			</Form.Item>
		</Form>
	);
}
