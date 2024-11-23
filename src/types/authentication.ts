export type AuthenticationStoreType = {
  loading: boolean;
  userId?: string;
  userName?: string;
  setLoading: (value: boolean) => void;
  setAuthentication: ({
    userName,
    userId,
  }: {
    userName: string;
    userId: string;
  }) => void;
};
