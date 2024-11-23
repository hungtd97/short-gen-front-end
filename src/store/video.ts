import { AuthenticationStoreType } from "@/types/authentication";
import { VideoStoreType, VideoType } from "@/types/video";
import { create } from "zustand";

export const useVideoStore = create<VideoStoreType>((set) => ({
  loading: true,
  videos: [],
  setLoading: (value: boolean) =>
    set((state) => ({ ...state, loading: value })),
  setVideos: (videos: VideoType[]) => set((state) => ({ ...state, videos })),
}));
