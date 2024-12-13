import { PaginatedData } from "../interfaces/api";
import { Track } from "../interfaces/models/Track.model";
import { axiosInstance } from "../lib/axios";
import { apiRoutes } from "../utils/constants/apiRoutes";

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
