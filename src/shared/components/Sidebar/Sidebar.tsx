import { X } from "lucide-react";
import { useContext } from "react";
import InputSearch from './Search/Search';
import CosmeticButtons from "../../../components/ComesticButtons/CosmeticButtons";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import UserActions from "./UserActions/UserActions";
import Playlists from "./Playlists/Playlists";

export default function Sidebar() {
  const { isSearchOpen, handleSearch } = useContext(SearchContext);
  console.log(isSearchOpen)

  return (
    <aside className="w-72 bg-zinc-950 p-6">
       <CosmeticButtons />
       {
          !isSearchOpen
          ?
            (
              <>
                <UserActions />
                <Playlists />
              </>
            )
          :
            (
              <div className="flex flex-col gap-2 mt-5 p-2">
                <X onClick={() => handleSearch()} className="cursor-pointer hover:scale-110 transition-transform" />
                <InputSearch />
              </div>
            )    
       }
    </aside>
  )
}