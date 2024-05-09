import Search from './Search/Search'
import { useContext } from "react";
import CosmeticButtons from "../../../components/ComesticButtons/CosmeticButtons";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import UserActions from "./UserActions/UserActions";
import Playlists from "./Playlists/Playlists";

export default function Sidebar() {
  const { isSearchOpen } = useContext(SearchContext);
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
              <Search />
            )    
       }
    </aside>
  )
}