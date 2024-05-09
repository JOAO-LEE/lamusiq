import { createContext } from "react";
import { AuthContext } from "../../model/AuthContext";

export const authContext = createContext<AuthContext | null>(null);
