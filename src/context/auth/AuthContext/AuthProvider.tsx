import { useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import supabase from "../../../config/supabaseConfig";
import { Session, User } from "@supabase/supabase-js";
import { getSpotifyToken } from "../../../services/Spotify/Spotify";
import { SpotifyTokenResponse } from "../../../model/Spotify/SpotifyTokenResponse";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const [session, setSession] = useState<Session | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [spotifyToken, setSpotifyToken] = useState<SpotifyTokenResponse>();

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;

        setSession(session);
        setUser(session?.user);
  
        if (!spotifyToken) {
          const token = await getSpotifyToken();
          setSpotifyToken(token);
          setIsLoading(false);
          return;
        }
        
      } catch (error) {
        console.log(error)
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null)
        setUser(undefined)
        setSpotifyToken(undefined);
        return;
      }
      
      if (session) {
        setSession(session);
        setUser(session?.user);
      }

      setIsLoading(false);
    });
    
    setData();
    
    return () => {
      subscription.unsubscribe();
    };
    
}, []);

const value = {
  session,
  user,
  spotifyToken,
  isLoading
};
  
  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  )
};