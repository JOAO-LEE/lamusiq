import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { Playlist } from "../model/Playlist/Playlist";
import { getPlaylistById } from "../services/Playlist/Playlist";
import { LoadingSpinner } from "../components/Loading/LoadingSpinner";
import { MediaHeader } from "../components/Media/MediaHeader/MediaHeader";
import { PageType } from "../enum/PageType.enum";
import { TrackMapper } from "../components/Tracks/Mapper/TrackMapper";
import { MediaMarkers } from "../components/Media/MediaMarkers/MediaMarkers";
import { Track } from "../model/Track/Track";

export function PlaylistPage() {
  const param = useParams();
  const auth = useAuth();
  const [playlist, setPlaylist] = useState<Playlist>();
  const [loadingPlaylistInfo, setLoadingPlaylistInfo] = useState<boolean>(true);
  const [playlistTracks, setPlaylistTracks] = useState<Array<Track>>();

  useEffect(() => {
    const getPlaylistInfo = async (id: string, token: string) => {
      const foundPlaylist = await getPlaylistById(id, token);
      // console.log(foundPlaylist)

      if (foundPlaylist) {
        setPlaylist(foundPlaylist);
        const treatedTracks = foundPlaylist?.tracks?.items
        ?.map(({track, added_at }) => {
          return {
            ...track,
            added_at
          };
       });
        setPlaylistTracks(treatedTracks);
        setLoadingPlaylistInfo(false);
      }
    }
    
    if (param.id && auth?.spotifyToken?.access_token) {
      getPlaylistInfo(param.id, auth.spotifyToken.access_token)
    }

  }, [param.id, auth?.spotifyToken?.access_token]);

  return (
    <>
    { 
      loadingPlaylistInfo 
      ?
      <LoadingSpinner /> 
      :
        (
          <>
            {
              !!playlist !== undefined
              &&
                (
                  <section className="w-full text-zinc-300 h-min">
                    <div className="flex flex-col gap-2 relative">
                      <img 
                      src={playlist?.images[0]?.url} 
                      alt=""
                      className="object-cover brightness-75" 
                      />
                      <div className="flex flex-col absolute backdrop-blur-3xl  w-full h-full gap-2">
                        <MediaHeader 
                        media={playlist!}
                        />
                        <div className="bg-zinc-950 h-full">
                          <MediaMarkers 
                          pageType={PageType.PLAYLIST}
                          />
                          <div className="text-sm p-2">
                          {
                            !!playlistTracks?.length
                            &&
                              (
                                <TrackMapper
                                tracks={playlistTracks}
                                pageType={PageType.PLAYLIST}
                                />
                              )
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )
            }
          </>
        )
    }
  </>   
  )
}