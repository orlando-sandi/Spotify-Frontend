import { Card } from "antd";
import "./styles.scss";
import Meta from "antd/es/card/Meta";

export default function Home() {
  return (
    <div className="home">
      <div className="home__track-grid">
        {tracks.map((track) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={track.albumCover}></img>}
          >
            <Meta title={track.name} description={track.artistName}></Meta>
          </Card>
        ))}
      </div>
    </div>
  );
}
