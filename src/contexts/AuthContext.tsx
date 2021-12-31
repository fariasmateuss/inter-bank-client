import { createContext, ReactNode, useMemo, useState } from 'react';

import { api } from '@services/api';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
};

type Credentials = {
  email: string;
  password: string;
};

interface NewUser extends Credentials {
  firstName: string;
  lastName: string;
}

type AuthContextProps = {
  user: User;
  signIn(credentials: Credentials): Promise<User>;
  signUp(data: NewUser): Promise<User>;
  getCurrentUser: () => Promise<User>;
};

type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(() => {
    const storagedUser = localStorage.getItem(`@InterBank:user`);

    if (storagedUser) {
      return JSON.parse(storagedUser);
    }

    return {} as User;
  });

  const getCurrentUser = async () => {
    const response = await api.get<User>(`/user/me`);
    const { data } = response;

    localStorage.setItem(`@InterBank:user`, JSON.stringify(data));
    setUser(data);

    return data;
  };

  const signIn = async ({ email, password }: Credentials) => {
    const response = await api.post(`/user/signin`, {
      email,
      password,
    });
    const { accessToken, status, message } = response.data;

    if (status === `error`) {
      return message;
    }

    if (accessToken) {
      localStorage.setItem(`@InterBank:token`, accessToken);
    }

    return getCurrentUser();
  };

  const signUp = async ({ email, password, firstName, lastName }: NewUser) => {
    const response = await api.post(`/user/signup`, {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken } = response.data;

    localStorage.setItem(`@InterBank:token`, accessToken);

    return getCurrentUser();
  };

  const memoizedValues = useMemo(
    () => ({ user, signIn, signUp, getCurrentUser }),
    [user],
  );

  return (
    <AuthContext.Provider value={memoizedValues}>
      {children}
    </AuthContext.Provider>
  );
}
