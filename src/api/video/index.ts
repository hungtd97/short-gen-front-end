import { ApiResponse } from "apisauce";
import { api } from "..";

export const getVideoList = async ({
  sessionId,
}: {
  sessionId: string;
}): Promise<ApiResponse<any>> => {
  return await api.get(`/get_video_list`, undefined, {
    headers: {
      sessionId,
    },
  });
};
