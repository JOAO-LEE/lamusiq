import { useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import supabase from "../../config/supabaseConfig";
import { Session, User } from "@supabase/supabase-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState<User>()
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const setData = async () => {
        const { data: { session }, error } = await supabase.auth.getSession();
        // console.log(error)
        if (error) throw error;
        setSession(session)
        setUser(session?.user)
       
    };

    const { data: {subscription} } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setUser(session?.user)
    });

    setData();

    return () => {
        subscription.unsubscribe();
    };
    
}, []);

const value = {
  session,
  user,
};
  
  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  )
};