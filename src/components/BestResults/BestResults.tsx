import { useState, useEffect } from "react";
import { SearchBestResults, SearchResults } from "../../model/Search/SearchResult";
import { ArtistRelated } from "./components/ArtistRelated/ArtistRelated";
import { TracksRelated } from "./components/TracksRelated/TracksRelated";

export function BestResults({ searchResults }: { searchResults: SearchResults }) {
  const [bestResults, setBestResults] = useState<SearchBestResults>();
  
  useEffect(() => {
    const { artists, tracks } = searchResults;
    if (artists.items?.length && tracks.items?.length) {
      
      setBestResults( 
        { 
          image: artists.items[0].images[0]?.url, 
          name: artists?.items[0].name, 
          type: `${artists.items[0].type[0].toUpperCase()}${artists.items[0].type.slice(1)}`,
          tracks: tracks?.items?.slice(0, 4) ?? []
        }
      );  
    }  
  }, [searchResults]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-md bg-zinc-900 p-3 border border-zinc-700">
      {
        bestResults 
        ?
          ( 
            <>
              <ArtistRelated 
              bestResults={bestResults}
              />
              <TracksRelated 
              bestResults={bestResults}
              />
            </>
          )
        :
          (
            <>
            </>   
          )
      }
    </div>
  )
}
