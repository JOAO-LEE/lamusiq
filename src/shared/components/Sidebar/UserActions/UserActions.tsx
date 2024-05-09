import { Home, Heart, UserRound, Search } from 'lucide-react'
import { useContext } from 'react'
import { SearchContext } from '../../../../context/SearchContext/SearchContext'

function UserActions() {
  const { handleSearch } = useContext(SearchContext);

  return (
    <nav className="space-y-5 mt-10">
      <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Home />Home</a>
      <p className="flex items-center gap-3 text-sm font-semibold text-zinc-200 cursor-pointer" onClick={() => handleSearch()}><Search />Search</p>
      <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "><Heart />Favorites</a>
      <a href="/me" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "><UserRound />Me</a>
    </nav>
  )
}

export default UserActions