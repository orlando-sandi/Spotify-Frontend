import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#08979c",
				},
			}}
		>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</QueryClientProvider>
		</ConfigProvider>
	</StrictMode>
);
