import { COOKIE_USER_ID, COOKIE_USER_NAME } from "@/constants";
import { useAuthenticationStore } from "@/store/authentication";
import { getCookie, getCookies } from "cookies-next/client";
import { useMemo } from "react";

export const useAuthentication = () => {
  const loading = useAuthenticationStore((state) => state.loading);
  const userId = useAuthenticationStore((state) => state.userId);
  const userName = useAuthenticationStore((state) => state.userName);
  const setLoading = useAuthenticationStore((state) => state.setLoading);
  const setAuthentication = useAuthenticationStore(
    (state) => state.setAuthentication
  );

  const isAuthenticated = useMemo(
    () => !!userId && !!userName,
    [userId, userName]
  );

  const getAuthorizedUser = () => {
    const userId = getCookie(COOKIE_USER_ID);
    const userName = getCookie(COOKIE_USER_NAME);
    if (userId && userName) {
      setAuthentication({ userId, userName });
    }
    setLoading(false);
  };

  const getUserId = () => {
    const userId = getCookie(COOKIE_USER_ID);
    return userId;
  };

  return {
    loading,
    getAuthorizedUser,
    setLoading,
    setAuthentication,
    isAuthenticated,
    userName,
    userId,
    getUserId,
  };
};
