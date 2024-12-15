import axios from "axios";
import { API_BASE_URL } from "../utils/constants/env";
import { useBoundStore } from "../store";

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
});

axiosInstance.interceptors.request.use((request) => {
	const user = useBoundStore.getState().user;
	if (user) {
		request.headers.Authorization = `Basic ${btoa(
			`${user.username}:${user.password}`
		)}`;
	}
	return request;
});
export { axiosInstance };
