import { MessageResponse } from "../interfaces/api";
import { SignInUserRequest } from "../interfaces/api/auth";
import { User } from "../interfaces/models/User.model";
import { axiosInstance } from "../lib/axios";
import { apiRoutes } from "../utils/constants/apiRoutes";

export const signInUser = async (
	userRequest: SignInUserRequest
): Promise<User> => {
	const response = await axiosInstance.post(apiRoutes.signIn, userRequest);
	return response.data;
};

export const signUpUser = async (
	userRequest: SignInUserRequest
): Promise<MessageResponse> => {
	const response = await axiosInstance.post(apiRoutes.signUp, userRequest);

	return response.data;
};
