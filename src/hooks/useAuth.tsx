import { useContext } from "react";

import { AuthContext } from "@contexts/AuthContex";

export function useAuth() {
  const contextDAta = useContext(AuthContext);

  return contextDAta;
}