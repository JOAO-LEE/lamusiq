import { Session, User } from "@supabase/supabase-js";
import { SpotifyTokenResponse } from "./SpotifyTokenResponse";

export interface AuthContext {
  session: Session | null | undefined 
  user: User | null | undefined
  spotifyToken?: SpotifyTokenResponse
  signOut?: () => void
  isLoading?: boolean
}