import { createCtx } from "@/lib/utils/createContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { clearAuthCookie, getCredentials } from "../utils";
import { useMe } from "@/services/me";

type AuthContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
  setSignOut: () => void;
  setSignIn: () => void;
};

const authContext = createCtx<AuthContextValue>();
const [, Provider] = authContext;
export const [useAuthContext] = authContext;

type AuthProvoderProps = {
  children: React.ReactNode;
};

export const AuthProvider = (props: AuthProvoderProps) => {
  const [authData, setAuthData] = useState({
    isAuthenticated: false,
    isCreateCompany: false,
    isLoading: true,
  });

  const setSignIn = () => {
    setAuthData({
      isAuthenticated: true,
      isCreateCompany: false,
      isLoading: false,
    });
  };

  const queryClient = useQueryClient();

  const setSignOut = () => {
    queryClient.clear();
    clearAuthCookie();
    setAuthData({
      isAuthenticated: false,
      isCreateCompany: false,
      isLoading: false,
    });
  };

  const { asPath } = useRouter();

  useEffect(() => {
    const userCredentials = getCredentials();

    if (userCredentials) {
      setAuthData({
        isAuthenticated: true,
        isCreateCompany: false,
        isLoading: false,
      });
    } else {
      setSignOut();
    }
  }, [asPath]);

  const AuthContextValue: AuthContextValue = {
    ...authData,
    setSignIn,
    setSignOut,
  };

  return <Provider value={AuthContextValue}>{props.children}</Provider>;
};
