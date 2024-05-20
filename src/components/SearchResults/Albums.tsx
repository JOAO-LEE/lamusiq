import { SearchResultsDTO } from '../../model/Search/SearchResults'
import { getYear } from '../../utils/formatDate'

function Albums({ searchResults }: { searchResults: SearchResultsDTO }) {

  return (
    <div className="rounded-md bg-zinc-900 p-3 border border-zinc-700 ">
      <h2 className="text-2xl">Albums</h2>
      <div className="flex gap-1 overflow-x-auto scrollbar-none">
        {
          searchResults?.albums.items.map((album) => {       
            if (album.images[0]?.url) {
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

          }
        )}
      </div>
    </div>
  )
}

export default Albums