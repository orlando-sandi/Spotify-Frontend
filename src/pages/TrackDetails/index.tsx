import { Navigate, useParams } from "react-router";
import "./styles.scss";
import { useQuery } from "@tanstack/react-query";
import { TRACK_KEY } from "../../utils/constants/queryKeys";
import { getTrack, getTrackCover } from "../../services/trackService";
import { Flex, Grid, Image, Result, Skeleton, Tooltip, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { milisecondsToMinutes } from "../../utils/conversions";
export default function TrackDetails() {
	const params = useParams();
	const isrc = params.id;
	const breakpoint = Grid.useBreakpoint();
	const { data, isError, isLoading } = useQuery({
		queryKey: [TRACK_KEY, isrc],
		queryFn: () => getTrack(isrc!),
		enabled: isrc !== undefined,
	});

	if (!isrc) {
		return <Navigate to={"/"} />;
	}

	return (
		<Flex
			vertical={!breakpoint.md}
			align={breakpoint.md ? "flex-start" : "center"}
			gap="1.5rem"
			className="track-details"
			justify="center"
		>
			{isLoading && <Skeleton active />}
			{isError && (
				<Result
					status="error"
					title="Error retrieving track details"
					subTitle="Wait a few seconds before trying again"
				/>
			)}
			{data && (
				<>
					<div className="track-details__image-container">
						<Image
							preview={{
								toolbarRender: () => null,
							}}
							src={getTrackCover(data.isrc)}
						/>
					</div>

					<Flex vertical className="track-details__information">
						<Flex
							align={breakpoint.md ? "flex-start" : "center"}
							vertical
							className="track-details__title-container"
						>
							<Typography.Title className="track-details__title">
								{data.name}
							</Typography.Title>
							{data.explicit ? (
								<Tooltip
									className="track-details__explicit-tooltip"
									title="This song contains harsh language"
								>
									<Typography.Paragraph type="warning">
										<WarningOutlined /> Explicit Content
									</Typography.Paragraph>
								</Tooltip>
							) : null}
						</Flex>
						<Typography.Title
							className="track-details__artist"
							level={4}
							type="secondary"
						>
							{data.artistName}
						</Typography.Title>
						<Typography.Title
							className="track-details__album"
							level={4}
							type="secondary"
						>
							{data.albumName}
						</Typography.Title>
						<Typography.Text>
							{milisecondsToMinutes(data.playbackSeconds)} minutes
						</Typography.Text>

						<Typography.Text>
							Added at {new Date(data.createdAt).toDateString()}
						</Typography.Text>
					</Flex>
				</>
			)}
		</Flex>
	);
}
