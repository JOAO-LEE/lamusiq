import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getAlbumById, getAlbumTracks } from "../services/Album/Album";
import { Album as AlbumDTO} from '../model/Album/Album'
import { Track } from "../model/Track/Track";
import { getYear } from "../utils/formatDate";
import AlbumHeader from "../components/Album/Header/AlbumHeader";
import AlbumMarkers from "../components/Album/Markers/AlbumMarkers";
import { TrackMapper } from "../components/Tracks/Mapper/TrackMapper";
import { PageType } from "../enum/PageType.enum";
import { MoreOf } from "../components/MoreOf/MoreOf";

export function AlbumPage() {
  const param = useParams();
  const auth = useAuth();
  const [album, setAlbum] = useState<AlbumDTO>();
  
  const [albumTracks, setAlbumTracks] = useState<Array<Track>>();

  useEffect(() => {

    const getInfo = async (id: string, token: string) => {
      try {
        const [album] = await Promise.all([getAlbumById(id, token)]);
        if (album) {
          setAlbum(album);
          const fetchedAlbumTracks = await getAlbumTracks(id, token, album.total_tracks);
          setAlbumTracks(fetchedAlbumTracks);
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
    <section className="w-full text-zinc-300 mb-[46rem]">
      <div className="flex flex-col gap-2 relative">
        <img 
        src={album?.images[0]?.url} 
        alt=""
        className="object-cover brightness-75" 
        />
        <div className="flex flex-col absolute backdrop-blur-3xl w-full h-full gap-2">
          <AlbumHeader 
          album={album!}
          />
          <div className="bg-zinc-950 p-4">
            <AlbumMarkers />
            <div className="text-sm ">
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