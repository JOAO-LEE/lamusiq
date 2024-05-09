import { LogOut } from "lucide-react";
import supabase from "../config/supabaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Me() {
  const auth = useAuth();
  console.log(auth?.user)
  // console.log(auth)
  const navigate = useNavigate();
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