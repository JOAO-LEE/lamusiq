import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getAlbumById, getAlbumTracks } from "../services/Album/Album";
import { getArtist, getArtistAlbums } from "../services/Artist/getArtist";
import { Album as AlbumDTO} from '../model/Album/Album'
import { Tracks } from "../model/Tracks/Tracks";
import { getYear } from "../utils/formatDate";
import Track from "../components/Tracks/Track/Track";
import AlbumHeader from "../components/Album/Header/AlbumHeader";
import AlbumMarkers from "../components/Album/Markers/AlbumMarkers";
import { AlbumsMapper } from "../components/Album/Mapper/AlbumsMapper"
import { Artist } from "../model/Artist/Artist";

export function AlbumPage() {
  const param = useParams();
  const location = useLocation();
  const auth = useAuth();
  const [album, setAlbum] = useState<AlbumDTO>();
  const [moreOf, setMoreOf] = useState<Array<AlbumDTO>>();
  const [albumTracks, setAlbumTracks] = useState<Tracks[]>();
  const [artistInfo, setArtistInfo] = useState<Artist>()

  useEffect(() => {

    const getAlbum = async (id: string, token: string) => {

      try {
        const [album, { items: artistAlbums }, artist] = await Promise.all([getAlbumById(id, token), getArtistAlbums(location.state, token), getArtist(location.state, token)]);
        const { items: fetchedAlbumTracks } = await getAlbumTracks(id, token, album.total_tracks);

        setArtistInfo(artist)
        setAlbum(album);
        setMoreOf(artistAlbums.filter((album: AlbumDTO) => album.id !== param.id ))
        setAlbumTracks(fetchedAlbumTracks);

      } catch (error) {
        console.log(error)
      }
    };

    if (param.id && auth?.spotifyToken?.access_token) {
      getAlbum(param.id, auth.spotifyToken.access_token)
    }

  }, [param.id, auth?.spotifyToken?.access_token]);

  return (
    <section className="w-full text-zinc-300 mb-[98rem] xl:mb-56">
      <div className="flex flex-col gap-2 relative">
        <img 
        src={album?.images[0]?.url} 
        alt=""
        className="object-cover brightness-75" 
        />
        <div className="flex flex-col absolute backdrop-blur-3xl w-full h-full gap-2">
          <AlbumHeader album={album!}/>
          <div className="bg-zinc-950 p-4">
            <AlbumMarkers />
            <div className="text-sm">
              {
                albumTracks?.map((track, index) => (
                  <Track 
                  track={track} 
                  trackNum={index + 1}
                  showImage={false}
                  key={index} 
                  />
                ))
              }
            </div>
            <div className="flex gap-1 text-xs py-2">
              <p>&copy; </p>
              <p>{getYear(album?.release_date ?? "")}</p>
              <p>{album?.label}</p>
            </div>
            {
              moreOf?.length
              && 
                ( 
                  <div className="mt-10">
                    <h2 className="text-xl font-bold">More of {artistInfo?.name}</h2>
                    <div className="flex gap-1 overflow-x-auto scrollbar-none">
                      <AlbumsMapper albums={moreOf} />
                    </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
  </section> 
  )
}