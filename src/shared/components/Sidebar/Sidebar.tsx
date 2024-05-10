import Search from './Search/Search'
import { useContext } from "react";
import CosmeticButtons from "../../../components/ComesticButtons/CosmeticButtons";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import UserActions from "./UserActions/UserActions";
import Playlists from "./Playlists/Playlists";

export default function Sidebar() {
  const { isSearchOpen } = useContext(SearchContext);

  return (
    <aside className="w-20 flex flex-col items-center h-full p-6 bg-zinc-950  lg:inline lg:w-72">
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
              <Search />
            )    
       }
    </aside>
  )
}