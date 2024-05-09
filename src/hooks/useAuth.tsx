import { useContext } from "react";
import { authContext } from "../context/AuthContext/AuthContext";

export const useAuth = () => {
  return useContext(authContext);
};