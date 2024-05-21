import { Session, User } from "@supabase/supabase-js";
import { SpotifyTokenResponse } from "../Spotify/SpotifyTokenResponse";

export interface AuthContext {
  session: Session | null | undefined 
  user: User | null | undefined
  spotifyToken?: SpotifyTokenResponse
  signOut?: () => void
  isLoading?: boolean
}