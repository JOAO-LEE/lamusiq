import { SearchResultsDTO } from "../../model/Search/SearchResults";

function Artists({ searchResults }: {searchResults: SearchResultsDTO}) {
  return (
    <div className="rounded-md bg-zinc-900 p-3 border border-zinc-700">
      <h2 className="text-2xl">Artists</h2>
      <div className="flex gap-2 overflow-x-auto scrollbar-none p-1.5 w-full">
        {
          searchResults?.artists.items.map((artist) => {       
            if (artist.images[0]?.url) {
              return (
                <div className="flex flex-col gap-2 items-center p-2 min-w-max" key={artist.id}>
                  <img 
                  src={artist.images[0]?.url} 
                  className="rounded-full object-cover size-48 sm:size-40"
                  />
                  <div className="flex flex-col text-center">
                    <span className="text-lg">{artist.name}</span>
                    <span className="text-zinc-600">Artist</span>
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

export default Artists