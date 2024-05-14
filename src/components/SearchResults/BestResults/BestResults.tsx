import { useState, useEffect } from "react"
import { BestResults, SearchResultsDTO, TracksTreatedResult } from "../../../model/Search/SearchResults"
import { getDuration } from "../../../utils/getDuration";
import ArtistRelated from "./components/ArtistRelated";
import TracksRelated from "./components/TracksRelated";


function BestResults({ searchResults }: { searchResults: SearchResultsDTO }) {
  const [bestResults, setBestResults] = useState<BestResults>();

  useEffect(() => {
    if (searchResults) {
      const tracks: TracksTreatedResult[] = searchResults.tracks.items.map(track => {
        return {
          album: {
            images: track?.album?.images ?? [],
          },
          explicit: track.explicit,
          duration_ms: track.duration_ms,
          name: track.name,
          artist: track.artists[0].name
        }
      });
      setBestResults( 
        { 
          image: searchResults?.artists?.items[0]?.images[0].url, 
          name: searchResults?.artists?.items[0].name, 
          type: `${searchResults?.artists?.items[0].type[0].toUpperCase()}${searchResults.artists.items[0].type.slice(1)}`,
          tracks: tracks.slice(0, 4)
          // tracks: searchResults.tracks
        }
      );  
    }  
  }, [searchResults]);

  return (
    <div className="grid grid-cols-3 gap-3 rounded-md bg-zinc-900 p-3 border border-zinc-700">
      {
        bestResults 
        ?
          ( 
            <>
              <ArtistRelated bestResults={bestResults}/>
              <TracksRelated bestResults={bestResults}/>
            </>
          )
        :
        <></>   

      }
      
      
    </div>
  )
}

export default BestResults