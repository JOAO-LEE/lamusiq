import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { SearchResultsDTO } from "../model/Search/SearchResults";
import Artists from "../components/SearchResults/Artists";
import Albums from "../components/SearchResults/Albums";
import Playlists from "../components/SearchResults/Playlists";
import BestResults from "../components/SearchResults/BestResults/BestResults";

function SearchResults() {
  const searchParams = useSearchParams();
  const auth = useAuth();
  const [searchResults, setSearchResults] = useState<SearchResultsDTO>();
  useEffect(() => {

    const getSearchResults = async (): Promise<void> => {
  
      try {
        const searchTerm = searchParams[0].get('q')?.trim();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album,artist,playlist,track,show,episode,audiobook`,
          {
            headers:
              {
                'Authorization': `Bearer ${auth?.spotifyToken?.access_token}` 
              } 
          }
        );
      // console.log(response)
      const searchResults: SearchResultsDTO = await response.json();
      console.log(searchResults)
      setSearchResults(searchResults)

      } catch (error) {
        console.log(error)
        
      }
    }

    getSearchResults()

  }, []);

  return (
    <section className=" flex flex-col mb-12">
      <h1 className="text-3xl text-zinc-50">See the results for "<span className="text-green-400">{searchParams[0].get('q')}</span>":</h1>
      <div className="flex flex-col gap-3 w-full p-1 mt-2">
        <BestResults searchResults={searchResults!}/>
        <Artists searchResults={searchResults!} />
        <Albums searchResults={searchResults!} />
        <Playlists searchResults={searchResults!} />
      </div>
    </section>
  )
}

export default SearchResults;
// " rounded-full object-contain"
    // {/* {
    //     searchResults 
    //     ?
    //       (
    //         <> */}

  //  {/* </>
  //         )
  //       :  */}
  //         {/* ( */}
  //           {/* <h1 className="text-4xl text-zinc-50">No results for"<span className="text-green-400">{searchParams[0].get('q')}</span>" :(</h1> */}
  //         {/* ) */}


  //     {/* } */}
  // h-[${artist.images[0]?.height.toString()}px] w-[${artist.images[0]?.width.toString()}px] 