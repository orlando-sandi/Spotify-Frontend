export interface Track {
  isrc: string;
  artistName: string;
  albumName: string;
  albumCover: string;
  playbackSeconds: number;
  name: string;
  isExplicit: boolean;
  createdAt: Date;
}
