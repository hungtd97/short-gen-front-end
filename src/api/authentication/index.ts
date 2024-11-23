import { ApiResponse } from "apisauce";
import { api } from "..";

export const postLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<ApiResponse<any>> => {
  return await api.post(`login`, {
    username,
    password,
  });
};
