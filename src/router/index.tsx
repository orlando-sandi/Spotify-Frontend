import { lazy } from "react";
import { Route, Routes } from "react-router";
import Layout from "../UI/layouts/Layout";

const Home = lazy(() => import("../pages/Home"));
export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
