import { SearchResultsDTO } from "../../model/Search/SearchResults"


function Playlists({searchResults}: {searchResults: SearchResultsDTO}) {
  return (
    <div className="rounded-md bg-zinc-900 p-3 border border-zinc-700">
      <h2 className="text-2xl">Playlists</h2>
      <div className="flex gap-1 overflow-x-auto scrollbar-none">
        {
          searchResults?.playlists.items.map((playlist) => (
            <div className="flex flex-col gap-2 p-2" key={playlist.id}>
              <div className="w-48">
                <img 
                src={playlist.images[0]?.url} 
                className="rounded-md object-cover size-48 sm:size-40"
                />
              </div>
              <div className="flex flex-col text-sm w-40">
                <span className="truncate">{playlist.name}</span>
                <span className="text-zinc-400">By {playlist.owner?.display_name}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Playlists