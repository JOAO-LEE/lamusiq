import { LogOut } from "lucide-react";
import supabase from "../config/supabaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PhotoAndInfo from "../components/Profile/PhotoAndInfo/PhotoAndInfo";

export function Me() {
  const auth = useAuth();
  console.log(auth?.user)
  const navigate = useNavigate();
  const signOut = () => {
    supabase.auth.signOut();
    navigate("/sign-in");
  };

  return (
    <section className="flex flex-col p-6">
      <div className="flex justify-between">
        <PhotoAndInfo />
        <button onClick={signOut} className="text-center p-1"><LogOut className="inline" /> Logout</button>
      </div>
    </section>
  )
}