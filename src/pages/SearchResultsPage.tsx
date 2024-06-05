import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { SearchResults } from "../model/Search/SearchResult";
import { getSearch } from "../services/Search/Search";
import { LoadingSpinner } from "../components/Loading/LoadingSpinner";
import { BestResults } from "../components/BestResults/BestResults.tsx";
import { AlbumsMapper } from "../components/Album/Mapper/AlbumsMapper.tsx";
import { ArtistsMapper } from "../components/Artist/Mapper/ArtistsMapper.tsx";
import { PlaylistsMapper } from "../components/Playlist/Mapper/PlaylistMapper.tsx";
import { Scroller } from "../components/Scroller/Scroller.tsx";
import { PageType } from "../enum/PageType.enum";

export function SearchResultsPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams[0].get('q')?.trim();
  const auth = useAuth();
  const [searchResults, setSearchResults] = useState<SearchResults>();
  const [loadingSearchResults, setLoadingSearchResults] = useState<boolean>(true);
  const [hasNoResults, setHasNoResults] = useState<boolean>(false);

  useEffect(() => {

    const getSearchResult = async (search: string, token: string): Promise<void> => {

      setLoadingSearchResults(true);
      const results = await getSearch(search, token);

      if (!results) {
        setHasNoResults(true);
        setLoadingSearchResults(false);
        return;
      }

      const { albums, artists, audiobooks, episodes, playlists, shows, tracks } = results;

      const noResults = !albums.total && !artists.total && !audiobooks.total && !episodes.total && !playlists.total && !shows.total && !tracks.total;

      if (noResults) {
        setHasNoResults(true);
        setLoadingSearchResults(false);
        return;
      }

      setSearchResults(results);
      setHasNoResults(false);
      setLoadingSearchResults(false);
    };

    if (searchTerm && auth?.spotifyToken?.access_token) {
      getSearchResult(searchTerm, auth?.spotifyToken?.access_token);
    }

  }, [searchTerm, auth?.spotifyToken?.access_token]);

  return (
    <div className="flex justify-center">
      {
        hasNoResults 
        &&
          (
            (
              <section className="flex flex-col justify-center items-center h-full">
                <div className="p-1">
                  <h1 className="text-4xl text-zinc-50">No results for"<span className="text-green-400">{searchParams[0].get('q')}</span>" :(</h1>
                </div>
              </section>
              
            )
          ) 
      }
      {

        (loadingSearchResults && !hasNoResults)
        ?
          ( 
            <LoadingSpinner />
          )
        :
          (
            <section className="flex flex-col w-[24rem] sm:min-w-[32rem] md:w-[40rem] lg:w-[44rem] xl:w-[60rem] 2xl:w-[80rem] mb-32">
            <div className="flex flex-col gap-3 p-1 mt-2 justify-center" >
              <h1 className="text-3xl text-zinc-50">See the results for "<span className="text-green-400">{searchParams[0].get('q')}</span>":</h1>
              <BestResults 
              searchResults={searchResults!}
              />
              {
                !!searchResults?.artists?.items?.length
                &&
                  (
                    <Scroller title="Albums">
                      <AlbumsMapper 
                      pageType={PageType.SEARCH}
                      albums={searchResults.albums.items!} 
                      />
                      </Scroller>
                  )
              }
              {
                !!searchResults?.artists?.items?.length
                &&
                  (
                    <Scroller title="Artists">                            
                      <ArtistsMapper 
                      artists={searchResults.artists.items} 
                      />
                    </Scroller>
                  )
              }
              {
                !!searchResults?.playlists?.items?.length
                && 
                  ( 
                    <Scroller title="Playlists">                            
                      <PlaylistsMapper 
                      playlists={searchResults.playlists.items} 
                      />
                    </Scroller>
                  )
              }
            </div>
          </section>
          )
        }
          
    </div>   
  )
}
