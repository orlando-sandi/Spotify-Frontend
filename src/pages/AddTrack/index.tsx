import {
	Button,
	Form,
	FormProps,
	Input,
	message,
	Spin,
	Typography,
} from "antd";
import "./styles.scss";
import { useMutation } from "@tanstack/react-query";
import { addTrack } from "../../services/trackService";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

interface ISRCFormValues {
	isrc: string;
}
export default function AddTrack() {
	const navigate = useNavigate();

	const [messageApi, contextHolder] = message.useMessage({
		maxCount: 1,
	});
	const { mutate: addTrackMutation, isPending } = useMutation({
		mutationFn: addTrack,
		onSuccess(data) {
			navigate(`/track/${data.isrc}`);
		},
		onError(error: AxiosError) {
			if (error.status === 404) {
				messageApi.error("The provided ISRC doesn't exists");
			} else {
				messageApi.error(
					"There was an error while adding the track, try again after some minutes"
				);
			}
		},
	});
	const onFinish: FormProps<ISRCFormValues>["onFinish"] = (values) => {
		addTrackMutation(values.isrc);
	};
	return (
		<div className="add-track">
			{contextHolder}
			<Spin spinning={isPending} fullscreen>
				Adding track...
			</Spin>
			<Typography.Title
				style={{
					textAlign: "center",
					marginBottom: "1rem",
				}}
			>
				Add track
			</Typography.Title>

			<Form layout="vertical" onFinish={onFinish} className="add-track__form">
				<Form.Item
					tooltip="The ISRC is a code format that uniquely identifies a song, it is 12 characters long."
					label="ISRC"
					name="isrc"
					rules={[
						{
							min: 12,
							max: 12,
							message: "The code must be 12 characters long",
							required: true,
						},
					]}
					required
				>
					<Input
						placeholder="Enter the ISRC of the song you want to add"
						className="add-track__input"
						required
					></Input>
				</Form.Item>
				<Form.Item label={null}>
					<Button
						type="primary"
						htmlType="submit"
						className="add-track__add-button"
					>
						Add
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
