import { useEffect } from "react";
import { getCookie } from "cookies-next/client";
import { COOKIE_USER_ID, COOKIE_USER_NAME } from "@/constants";
import { useAuthentication } from "@/hooks/useAuthentication";

interface IProps {
  children: React.ReactNode;
}

const AuthenticationProvider = ({ children }: IProps) => {
  const { getAuthorizedUser } = useAuthentication();

  useEffect(() => {
    getAuthorizedUser();
  }, []);

  return children;
};

export default AuthenticationProvider;
