import { Card } from "antd";
import { TrackCardProps } from "../../../interfaces/UI/molecules";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router";
import { getTrackCover } from "../../../services/trackService";

export default function TrackCard({ track }: TrackCardProps) {
	const navigate = useNavigate();
	return (
		<Card
			onClick={() => {
				navigate(`/track/${track.isrc}`, {
					viewTransition: true,
				});
			}}
			hoverable
			style={{ width: 240 }}
			cover={<img src={getTrackCover(track.isrc)}></img>}
		>
			<Meta title={track.name} description={track.artistName}></Meta>
		</Card>
	);
}
