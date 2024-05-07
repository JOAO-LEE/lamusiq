import React from 'react'

function Search() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <label className="text-xs text-zinc-700" htmlFor="search">Search playlists, songs, albums or artists</label>
      <input type="text" id="search"  className='rounded-full'/>
    </div>
  )
}

export default Search