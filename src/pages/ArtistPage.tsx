import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getArtist, getRelatedArtists, getTopTracks, getArtistAlbums } from "../services/Artist/Artist.ts";
import { ArtistPageInfo } from "../model/Artist/Artist";
import { TrackMapper } from "../components/Track/Mapper/TrackMapper.tsx";
import { AlbumsMapper } from "../components/Album/Mapper/AlbumsMapper.tsx";
import { ArtistsMapper } from "../components/Artist/Mapper/ArtistsMapper.tsx";
import { Album } from "../model/Album/Album";
import { LoadingSpinner } from "../components/Loading/LoadingSpinner";
import { PageType } from "../enum/PageType.enum";

export function ArtistPage() {
  const auth = useAuth();
  const param = useParams();
  const [artistInfo, setArtistInfo] = useState<ArtistPageInfo>();
  const [loadingArtist, setLoadingArtist] = useState<boolean>(true);
  
  useEffect(() => {
    const getArtistInfo = async (id: string, token: string) => {
      try {
        const [artist, tracks, relatedArtists, artistAlbums] = await Promise.all([getArtist(id, token), getTopTracks(id, token), getRelatedArtists(id, token), getArtistAlbums(id, token)]);
        if (artist && tracks && relatedArtists && artistAlbums) {
          setArtistInfo({
            id: artist.id,
            name: artist.name,
            images: artist.images,
            followers: {
              total: artist.followers.total
            },
            discography: artistAlbums,
            href: artist.href,
            tracks,
            type: artist.type,
            appears_on: artistAlbums.filter((artistAlbum: Album) => artistAlbum.album_group === "appears_on"),
            related_artists: relatedArtists,
          });
          
          setLoadingArtist(false);
        }
      } catch (error) {
        console.log(error) 
      }
    };

    if (param.id && auth?.spotifyToken?.access_token) {
      getArtistInfo(param.id, auth?.spotifyToken?.access_token);
    }
  }, [param.id, auth?.spotifyToken?.access_token]);

  return (
    <>
      { 
        loadingArtist
        ?
          ( 
            <LoadingSpinner />
          )
        : 
          (
            <section className="rounded-md mb-96 xl:mb-20 p-1.5 text-zinc-200">
              <div className="flex flex-col gap-2 relative">
                <img 
                src={artistInfo?.images[0]?.url} 
                alt="" 
                className="rounded-md object-fill brightness-75 hover:brightness-[0.3] transition duration-500"
                />
                <div className="flex flex-col absolute top-96 w-full">
                  <div className="flex flex-col backdrop-blur-2xl w-full">
                    <span className="text-7xl font-bold pointer-events-none p-2">{artistInfo?.name}</span>
                    <span className="drop-shadow-lg p-2">{artistInfo?.followers.total?.toLocaleString('en-US')} monthly listeners</span>
                    <section className="bg-zinc-900 p-3 flex flex-col gap-3">
                      {
                        !!artistInfo?.tracks.length 
                        &&
                          (
                            <div className="max-w-[80%]">
                              <h2 className="text-xl font-bold">Popular</h2>
                              <TrackMapper 
                              pageType={PageType.ARTIST}
                              tracks={artistInfo?.tracks} />
                            </div>
                          ) 
                      }
                      {
                        !!artistInfo?.discography.length
                        &&
                          (
                            <div>
                              <h2 className="text-xl font-bold">Discography</h2>
                              <div className="flex gap-1 overflow-x-auto scrollbar-none">
                                <AlbumsMapper
                                pageType={PageType.ARTIST}
                                albums={artistInfo.discography}
                                />
                              </div>
                            </div>
                          )
                      }
                      {
                        !!artistInfo?.related_artists?.length 
                        &&
                          (
                            <div>
                              <h2 className="text-xl font-bold">Fans also like</h2>
                              <div className="flex gap-2 overflow-x-auto scrollbar-none p-1.5">
                                <ArtistsMapper 
                                artists={artistInfo.related_artists} 
                                />
                              </div>
                            </div>
                          )
                      }
                      {
                        !!artistInfo?.appears_on?.length 
                        &&
                          (
                            <div>
                              <h2 className="text-xl font-bold">Appears on</h2>
                              <div className="flex gap-2 overflow-x-auto scrollbar-none p-1.5">
                                <AlbumsMapper
                                pageType={PageType.ARTIST} 
                                albums={artistInfo.appears_on} 
                                />
                              </div>
                            </div>
                          )
                      }
                    </section>
                  </div>  
                </div> 
              </div>
            </section>
          ) 
      }
    </>
  )
}