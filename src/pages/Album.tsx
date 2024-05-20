import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getAlbumById, getAlbumTracks } from "../services/Album/Album";
// import { getArtistAlbums } from "../services/Artist/getArtist";
import { Album as AlbumDTO} from '../model/Album/Album'
import { Tracks } from "../model/Tracks/Tracks";
import { getYear } from "../utils/formatDate";
import Track from "../components/Tracks/Track/Track";
import AlbumHeader from "../components/AlbumHeader/AlbumHeader";
import AlbumMarkers from "../components/AlbumMarkers/AlbumMarkers";

function Album() {
  const param = useParams();
  const [album, setAlbum] = useState<AlbumDTO>();
  // const [discography, setDiscography] = useState<AlbumDTO[]>();
  const [albumTracks, setAlbumTracks] = useState<Tracks[]>();
  const auth = useAuth();

  useEffect(() => {
    const getAlbum = async (id: string, token: string) => {
      try {
        const [album] = await Promise.all([getAlbumById(id, token)]);
        const {items} = await getAlbumTracks(id, token, album.total_tracks);
        // const {items: artistAlbums} = 
        console.log(album)
        setAlbum(album);
        setAlbumTracks(items);
      } catch (error) {
        console.log(error)
      }
    };

    if (param.id && auth?.spotifyToken?.access_token) {
      getAlbum(param.id, auth.spotifyToken.access_token)
    }

  }, [param.id, auth?.spotifyToken?.access_token]);

  return (
    <section className="w-full text-zinc-300">
      <div className="flex flex-col gap-2 relative">
        <img 
        src={album?.images[0]?.url} 
        alt=""
        className="object-cover brightness-75" 
        />
        <div className="flex flex-col absolute backdrop-blur-3xl w-full h-full">
          <AlbumHeader album={album!}/>
          <div className="bg-zinc-950 px-4">
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
            <div className="flex gap-1 text-xs">
              <p>&copy; </p>
              <p>{getYear(album?.release_date ?? "")}</p>
              <p>{album?.label}</p>
            </div>
            <div className="mt-5">
              <p>More of {}</p>

            </div>
          </div>
        </div>
      </div>
  </section> 
  )
}

export default Album