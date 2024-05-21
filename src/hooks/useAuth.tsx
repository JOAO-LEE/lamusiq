import { useContext } from "react";
import { authContext } from "../context/auth/AuthContext/AuthContext";

export const useAuth = () => {
  return useContext(authContext);
};