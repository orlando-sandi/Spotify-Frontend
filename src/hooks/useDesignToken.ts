import { theme } from "antd";

export default function useDesignToken() {
	return theme.useToken().token;
}
