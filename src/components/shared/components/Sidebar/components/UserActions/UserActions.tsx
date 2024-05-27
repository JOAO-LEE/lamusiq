import { Home, Heart, UserRound, Search } from 'lucide-react'
import { useContext } from 'react'
import { SearchContext } from "../../../../../../context/SearchContext/SearchContext"

function UserActions() {
  const { handleSearch } = useContext(SearchContext);

  return (
    <nav className="space-y-5 mt-10">
      <a href="/" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Home /><span className="hidden lg:inline">Home</span></a>
      <p className="flex items-center gap-3 text-sm font-semibold text-zinc-200 cursor-pointer" onClick={() => handleSearch()}><Search /><span className="hidden lg:inline">Search</span></p>
      <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "><Heart /><span className="hidden lg:inline">Favorites</span></a>
      <a href="/me" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><UserRound /><span className="hidden lg:inline">Me</span></a>
    </nav>
  )
}

export default UserActions