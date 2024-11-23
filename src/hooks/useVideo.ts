import { getVideoList } from "@/api/video";
import { COOKIE_USER_ID, COOKIE_USER_NAME } from "@/constants";
import { useVideoStore } from "@/store/video";
import { getCookie, getCookies } from "cookies-next/client";
import { useMemo } from "react";
import { useAuthentication } from "./useAuthentication";

export const useVideos = () => {
  const { getUserId } = useAuthentication();
  const loading = useVideoStore((state) => state.loading);
  const setLoading = useVideoStore((state) => state.setLoading);
  const videos = useVideoStore((state) => state.videos);
  const setVideos = useVideoStore((state) => state.setVideos);

  const fetchVideosList = async () => {
    try {
      const sessionId = getUserId();
      if (!sessionId) return Promise.reject();
      setLoading(true);
      const res = await getVideoList({ sessionId });
      const { data } = res;
      if (data) {
        setVideos(data.videos);
        setLoading(false);
        return Promise.resolve(data.videos);
      }
      return Promise.reject();
    } catch (err) {
      setLoading(false);
      return Promise.reject();
    }
  };

  return {
    loading,
    videos,
    fetchVideosList,
  };
};
