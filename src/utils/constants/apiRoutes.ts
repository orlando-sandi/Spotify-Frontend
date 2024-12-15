export const trackPrefix = "/tracks";
export const trackRoutes = {
	getAllTracks: trackPrefix,
	createTrack: trackPrefix + "/:id",
	getTrack: trackPrefix + "/:id",
	getTrackCover: trackPrefix + "/:id/cover",
};

export const authPrefix = "/auth";
export const authRoutes = {
	signIn: authPrefix + "/sign-in",
	signUp: authPrefix + "/sign-up",
};

export const apiRoutes = {
	...trackRoutes,
	...authRoutes,
};
