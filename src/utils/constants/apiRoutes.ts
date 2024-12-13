export const trackPrefix = "/tracks";
export const trackRoutes = {
  getAllTracks: trackPrefix,
  createTrack: trackPrefix + "/:id",
  getTrack: trackPrefix + "/:id",
  getTrackCover: trackPrefix + "/:id/cover",
};

export const apiRoutes = {
  ...trackRoutes,
};
