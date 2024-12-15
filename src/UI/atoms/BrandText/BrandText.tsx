import useDesignToken from "../../../hooks/useDesignToken";
import { BrandTextProps } from "../../../interfaces/UI/atoms";

export default function BrandText(props: BrandTextProps) {
	const token = useDesignToken();
	return (
		<p
			className={props.className ?? ""}
			style={{
				color: token.colorPrimary,
				fontWeight: "bold",
			}}
		>
			Musicalia
		</p>
	);
}
