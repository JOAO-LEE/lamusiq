import React from 'react'
import { Album as AlbumDTO} from '../../../model/Album/Album'
import { getYear } from '../../../utils/formatDate'

function Album({ album }: { album: AlbumDTO}) {
  return (
    <div className="flex flex-col gap-2 p-2" key={album.id}>
      <div className="">
        <img 
        src={album.images[0]?.url} 
        className="rounded-md object-cover size-48 sm:size-40"
        />
        </div>
      <div className="flex flex-col gap-1 w-48">
        <span className="text-sm truncate ">{album.name}</span>
        <div className="flex gap-1 text-xs text-gray-500">
          <span>{getYear(album.release_date)}</span>
          <span>•</span>
          <div className="text-xs flex truncate">
            {
              album.artists.length > 1 
              ? 
                (
                  album.artists.map((artist, index) => (
                  
                      <p key={artist.id} className="truncate">{artist.name}{index < 1 && <span>,&nbsp;</span>}</p>
                  ))
                )
              :
                (
                  album.artists[0].name
                )
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Album