import Search from './Search/Search'
import CosmeticButtons from "../../../components/ComesticButtons/CosmeticButtons";
import UserActions from "./UserActions/UserActions";
import Playlists from "./Playlists/Playlists";

export default function Sidebar() {

  return (
    <div 
    className="w-16 flex-0 flex flex-col items-center p-6 h-min sticky top-0 lg:w-56 lg:items-start z-10">
      <CosmeticButtons />    
      <UserActions />
      <Playlists />
      <Search />
    </div>
  )
} 