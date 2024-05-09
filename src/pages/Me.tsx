import { LogOut } from "lucide-react";
import supabase from "../config/supabaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Me() {
  const navigate = useNavigate();
  const {session} = useAuth();
  console.log(session)
  const signOut = () => {
    supabase.auth.signOut();
    navigate("/sign-in");
  };

  return (
    <section>
      <button onClick={signOut} className="text-center p-1"><LogOut className="inline" /> Logout</button>
    </section>

  )
}