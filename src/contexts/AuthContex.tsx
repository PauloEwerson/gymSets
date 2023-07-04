import { createContext, ReactNode } from "react";

import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider value={{
      user: {
        id: '1',
        name: 'Ewerson',
        email: 'ewersonmrt@gsoç;cp,',
        avatar: 'ewerson.png',
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}
