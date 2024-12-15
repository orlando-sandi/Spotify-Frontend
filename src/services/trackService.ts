import { PaginatedData } from "../interfaces/api";
import { Track } from "../interfaces/models/Track.model";
import { axiosInstance } from "../lib/axios";
import { apiRoutes } from "../utils/constants/apiRoutes";
import { API_BASE_URL } from "../utils/constants/env";

export const getAllTracks = async (
	page?: number
): Promise<PaginatedData<Track>> => {
	const response = await axiosInstance.get(apiRoutes.getAllTracks, {
		params: {
			page,
		},
	});
	return response.data;
};

export const getTrack = async (isrc: string): Promise<Track> => {
	const response = await axiosInstance.get(
		apiRoutes.getTrack.replace(":id", isrc)
	);

	return response.data;
};
export const addTrack = async (isrc: string): Promise<Track> => {
	const response = await axiosInstance.post(
		apiRoutes.createTrack.replace(":id", isrc)
	);
	return response.data;
};

export const getTrackCover = (isrc: string): string => {
	return API_BASE_URL + apiRoutes.getTrackCover.replace(":id", isrc);
};
