export type VideoStoreType = {
  loading: boolean;
  videos?: VideoType[];
  setLoading: (value: boolean) => void;
  setVideos: (videos: VideoType[]) => void;
};

export type VideoType = {
  file: string;
  id: string;
  name: string;
  thumbnail: string;
};
