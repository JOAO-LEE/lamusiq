import Search from './Search/Search'
import { useContext } from "react";
import CosmeticButtons from "../../../components/ComesticButtons/CosmeticButtons";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import UserActions from "./UserActions/UserActions";
import Playlists from "./Playlists/Playlists";

export default function Sidebar() {
  const { isSearchOpen } = useContext(SearchContext);

  return (
    <aside className={`${isSearchOpen ? "w-full sm:w-96 md:w-90 lg:w-72" : "flex-0 lg:inline lg:w-72"} flex flex-col items-center h-full p-6 bg-zinc-950`}>
      { !isSearchOpen && <CosmeticButtons />}
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