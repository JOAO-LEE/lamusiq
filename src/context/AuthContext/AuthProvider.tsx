import { useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import supabase from "../../config/supabaseConfig";
import { Session, User } from "@supabase/supabase-js";
import { getSpotifyToken } from "../../services/spotify";
import { SpotifyTokenResponse } from "../../model/SpotifyTokenResponse";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState<User>();
  const [session, setSession] = useState<Session | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [spotifyToken, setSpotifyToken] = useState<SpotifyTokenResponse>();

  useEffect(() => {
    const setData = async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        setSession(session);
        setUser(session?.user);
        if (session) {
          const spotifyToken = await getSpotifyToken();
          setSpotifyToken(spotifyToken);
          console.log(spotifyToken)

        }
        setIsLoading(false);

    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setUser(session?.user);
        
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