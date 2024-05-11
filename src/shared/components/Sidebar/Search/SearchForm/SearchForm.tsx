import { CircleX } from 'lucide-react'
import { useState } from 'react'

function SearchForm() {
  const [search, setSearch] = useState<string>("");

  return (
    <form className="group flex flex-col gap-2">
      <label className="text-xs text-zinc-700 group-hover:text-zinc-100" htmlFor="search">Search playlists, songs, albums or artists</label>
      <div className="flex items-center gap-2 bg-zinc-50 rounded-full p-2 w-full text-zinc-800">
        <input type="text" id="search" className='rounded-full p-2  w-full outline-none' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <CircleX onClick={() => setSearch("")} className="cursor-pointer" />
      </div>
    </form>
  )
}

export default SearchForm