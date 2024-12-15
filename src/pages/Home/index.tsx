import { Button, Empty, Flex, Input, Result, Skeleton, Typography } from "antd";
import "./styles.scss";
import { useQuery } from "@tanstack/react-query";
import { TRACK_KEY } from "../../utils/constants/queryKeys";
import { getAllTracks } from "../../services/trackService";
import TrackCard from "../../UI/molecules/TrackCard";
 
import { useNavigate } from "react-router";

export default function Home() {
	const navigate = useNavigate();
	const { data, isLoading, isError } = useQuery({
		queryKey: [TRACK_KEY],
		queryFn: () => getAllTracks(0),
	});
	const onCallAction = () => {
		navigate("/add-track");
	};
	return (
		<div className="home">
			<Flex
				align="center"
				justify="center"
				vertical
				gap="1rem"
				className="home__isrc-input-container"
			>
				<label htmlFor="isrc-input" className="home__isrc-input--label">
					Search for song metadata
				</label>
				<Input.Search
					className="home__isrc-input"
					id="isrc-input"
					placeholder="Search by ISRC"
					onSearch={(value) => {
						if (!value.trim()) {
							return;
						}
						navigate(`/track/${value}`);
					}}
				/>
			</Flex>
			<Typography.Title
				style={{
					marginBottom: "1rem",
				}}
			>
				Recently added tracks
			</Typography.Title>
			{isError && (
				<Result
					status={"500"}
					title="Something happened while retrieving the recent tracks..."
					subTitle="We are working on it!"
				/>
			)}
			{!isError && data && data.data.length === 0 && (
				<Empty description="There are currently no track metadata...">
					<Button type="primary" onClick={onCallAction}>
						Want to add some?
					</Button>
				</Empty>
			)}

			<div className="home__track-grid">
				{!isError &&
					!isLoading &&
					data &&
					data.data.length > 0 &&
					data.data.map((track) => (
						<TrackCard key={track.isrc} track={track} />
					))}

				{isLoading &&
					new Array(4)
						.fill(null)
						.map((_, i) => <Skeleton.Image active key={i} />)}
			</div>
		</div>
	);
}
