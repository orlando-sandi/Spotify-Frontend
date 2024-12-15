import { Navigate, Outlet, useLocation } from "react-router";
import { useBoundStore } from "../store";

export default function AuthGuard() {
	const user = useBoundStore((state) => state.user);
	const location = useLocation();

	if (user === null) {
		return (
			<Navigate
				to={"/sign-in"}
				state={{
					next: location.pathname,
				}}
			/>
		);
	}

	return <Outlet />;
}
