import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getAlbumById, getAlbumTracks } from "../services/Album/Album";
import { Album as AlbumDTO} from '../model/Album/Album'
import { Track } from "../model/Track/Track";
import { getYear } from "../utils/formatDate";
import { MediaHeader } from "../components/Media/MediaHeader/MediaHeader";
import { MediaMarkers } from "../components/Media/MediaMarkers/MediaMarkers";
import { TrackMapper } from "../components/Track/Mapper/TrackMapper";
import { PageType } from "../enum/PageType.enum";
import { MoreOf } from "../components/MoreOf/MoreOf";
import { LoadingSpinner } from "../components/Loading/LoadingSpinner";

export function AlbumPage() {
  const param = useParams();
  const auth = useAuth();
  const [album, setAlbum] = useState<AlbumDTO>();
  const [loadingAlbumInfo, setLoadingAlbumInfo] = useState<boolean>(true);
  const [albumTracks, setAlbumTracks] = useState<Array<Track>>();

  useEffect(() => {

    const getInfo = async (id: string, token: string) => {
      try {
        const [album] = await Promise.all([getAlbumById(id, token)]);
        if (album) {
          setAlbum(album);
          const fetchedAlbumTracks = await getAlbumTracks(id, token, album.total_tracks);
          setAlbumTracks(fetchedAlbumTracks);
          setLoadingAlbumInfo(false)
        }
      } catch (error) {
        console.log(error)
      }
    };

    if (param.id && auth?.spotifyToken?.access_token) {
      getInfo(param.id, auth.spotifyToken.access_token)
    }

  }, [param.id, auth?.spotifyToken?.access_token]);

  return (
    <>
      { 
        loadingAlbumInfo 
        ? 
        <LoadingSpinner />
        :
          (
            <section className="w-full text-zinc-300 h-min">
              <div className="flex flex-col gap-2 relative">
                <img 
                src={album?.images[0]?.url} 
                alt=""
                className="object-cover brightness-75" 
                />
                <div className="flex flex-col absolute backdrop-blur-3xl w-full h-full gap-2">
                  <MediaHeader
                  media={album!}
                  />
                  <div className="bg-zinc-950 p-4 h-full">
                    <MediaMarkers />
                    <div className="text-sm">
                    {
                      albumTracks?.length
                      &&
                        (
                          <TrackMapper
                          tracks={albumTracks}
                          pageType={PageType.ALBUM}
                          />
                        )
                    }
                    </div>
                    <div className="flex gap-1 text-xs py-2">
                      <p>&copy; </p>
                      <p>{getYear(album?.release_date ?? "")}</p>
                      <p>{album?.label}</p>
                    </div>
                    <MoreOf 
                    album={album}
                    />
                  </div>
                </div>
              </div>
            </section> 
          ) 
      }
    </>
  )
}