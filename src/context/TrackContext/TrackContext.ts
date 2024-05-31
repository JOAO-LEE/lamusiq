import { createContext } from "react";
import { TrackContext as TrackContextDTO } from "../../model/contexts/TrackContext";

export const TrackContext = createContext({} as TrackContextDTO);
