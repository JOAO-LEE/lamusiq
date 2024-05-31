import { LogOut } from "lucide-react";
import supabase from "../config/supabaseConfig";
import { useNavigate } from "react-router-dom";
import PhotoAndInfo from "../components/Profile/PhotoAndInfo/PhotoAndInfo";
import AccountInfo from "../components/Profile/AccountInfo/AccountInfo";
import { useState } from "react";
// import DeleteAccountModal from "../components/Profile/DeleteAccountModal/DeleteAccountModal";

export function MePage() {
  const navigate = useNavigate();
  const [isLogoutDialogOpened, setIsLogoutDialogOpened] = useState<boolean>(false);

  const signOut = () => {
    supabase.auth.signOut();
    navigate("/sign-in");
  };
  
  return (
    <section className="flex flex-1 flex-col p-6 gap-6 h-full">
      <div className="flex justify-between">
        <PhotoAndInfo />
        <button
        onClick={() => setIsLogoutDialogOpened(!isLogoutDialogOpened)} 
        className="text-center p-1">
          <LogOut className="inline" /> 
          Logout
        </button>
      </div>
      <div className="border-t flex flex-col border-zinc-800 h-full">
        <AccountInfo />
        <div className="self-end  xl:mb-0">
          <button className="bg-red-600 p-2 rounded-lg  hover:bg-red-700 hover:border border-zinc-100 transition-all">
            Delete account
          </button>
        </div>
      </div>
    </section>
  )
}

  //  {/* { 
  //           !isLogoutDialogOpened 
  //           &&
              
  //             (
  //               <DeleteAccountModal />
  //             )
  //         } */}
