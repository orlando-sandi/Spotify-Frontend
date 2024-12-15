import { lazy } from "react";
import { Route, Routes } from "react-router";
import Layout from "../UI/layouts/Layout";
import AuthGuard from "../guards/AuthGuard";
import AuthLayout from "../UI/layouts/AuthLayout";
const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const AddTrack = lazy(() => import("../pages/AddTrack"));
const TrackDetails = lazy(() => import("../pages/TrackDetails"));
export default function Router() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route element={<AuthGuard />}>
					<Route path="/add-track" element={<AddTrack />} />
					<Route path="/track/:id" element={<TrackDetails />} />
				</Route>
			</Route>

			<Route element={<AuthLayout />}>
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Route>
		</Routes>
	);
}
