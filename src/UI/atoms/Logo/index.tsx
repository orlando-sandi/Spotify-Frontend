import { LogoProps } from "../../../interfaces/UI/atoms";
import LogoImage from "../../../assets/logo.png";
export default function Logo(props: LogoProps) {
	return (
		<img
			src={LogoImage}
			className={props.className ?? ""}
			style={{
				width: "100%",
				height: "100%",
				objectFit: "cover",
			}}
		/>
	);
}
