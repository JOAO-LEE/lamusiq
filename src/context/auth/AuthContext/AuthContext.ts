import { createContext } from "react";
import { AuthContext } from "../../../model/contexts/AuthContext";

export const authContext = createContext<AuthContext | null>(null);
