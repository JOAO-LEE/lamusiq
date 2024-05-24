import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { SearchResults } from "../model/Search/SearchResult";
import { LoadingSpinner } from "../components/Loading/LoadingSpinner";
import BestResults from "../components/BestResults/BestResults";
import { AlbumsMapper } from "../components/Album/Mapper/AlbumsMapper";
import { ArtistsMapper } from "../components/Artists/ArtistsMapper.tsx";
import { PlaylistsMapper } from "../components/Playlists/PlaylistMapper";
import Scroller from "../components/SearchResults/Scroller";
import { PageType } from "../enum/PageType.enum";

export function SearchResultsPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams[0].get('q')?.trim();
  const auth = useAuth();
  const [searchResults, setSearchResults] = useState<SearchResults>();
  const [loadingSearchResults, setLoadingSearchResults] = useState<boolean>(true);
  const [hasNoResults, setHasNoResults] = useState<boolean>(true);

  useEffect(() => {
    const getSearchResults = async (): Promise<void> => {
      try {
        if (!searchTerm) {
          setLoadingSearchResults(false);
          return;
        }
        setLoadingSearchResults(true);

        const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album,artist,playlist,track,show,episode,audiobook`,
          {
            headers:
              {
                'Authorization': `Bearer ${auth?.spotifyToken?.access_token}` 
              } 
          }
        );

        if (response.status === 401) {
          throw new Error("An error occurred");
        }

      const searchResults: SearchResults  = await response.json();
      
      const { albums, artists, audiobooks, episodes, playlists, shows, tracks } = searchResults;

      if (!albums.total && !artists.total && !audiobooks.total && !episodes.total && !playlists.total && !shows.total && !tracks.total) {
        setHasNoResults(true);
        setLoadingSearchResults(false);
        return;
      }

      setSearchResults(searchResults);
      setHasNoResults(false);
      setLoadingSearchResults(false);
      } catch (error) {
        console.log(error)
        
      } finally {
        setLoadingSearchResults(false);

      }
    }

    getSearchResults();

  }, [searchTerm, auth?.spotifyToken?.access_token]);

  return (
    <>
    { 
      (loadingSearchResults && hasNoResults)
      ?
        ( 
          <LoadingSpinner />
        )
      : 
        (
          <>
            {
              (searchResults && !hasNoResults)
              && 
                (
                  <section className="flex flex-col mx-auto w-[24rem] sm:min-w-[32rem] md:w-[40rem] lg:w-[44rem] xl:w-[60rem] 2xl:w-[80rem] mb-32">
                  <div className="flex flex-col gap-3 p-1 mt-2 justify-center">
                    <h1 className="text-3xl text-zinc-50">See the results for "<span className="text-green-400">{searchParams[0].get('q')}</span>":</h1>
                    { 
                      !!(searchResults.artists.items.length > 0 && searchResults.tracks?.items?.length > 0)
                      &&
                        (
                          <>
                            <BestResults 
                            searchResults={searchResults!}
                            />
                          </>
                        ) 
                    }
                    {
                      !!searchResults.artists.items.length
                      &&
                        (
                          <Scroller title="Albums">
                            <AlbumsMapper 
                            pageType={PageType.SEARCH}
                            albums={searchResults.albums.items} 
                            />
                           </Scroller>
                        )
                    }
                    {
                      !!searchResults.artists.items.length
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
                      !!searchResults.playlists.items.length
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
          </>
        )
      }
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
    </>   
  )
}