import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getArtist, getRelatedArtists, getTopTracks, getArtistAlbums } from "../services/Artist/getArtist";
import { ArtistPage } from "../model/Artist/Artist";
import Track from "../components/Track/Track";
import { getYear } from "../utils/formatDate";
import Tracks from "../components/Tracks/Tracks";
import Albums from "../components/Albums/Albums";
import Artists from "../components/Artists/Artists";

function Artist() {
  const param = useParams();
  const [artist, setArtist] = useState<ArtistPage>();
  const [showAllTracks, setShowAllTracks] = useState<boolean>(false);
  const auth = useAuth();
  
  useEffect(() => {
    const getArtistInfo = async (id: string, token: string) => {
      try {
        const [artistInfo, { tracks }, { artists: relatedArtists }, { items: artistAlbums }] = await Promise.all([getArtist(id, token), getTopTracks(id, token), getRelatedArtists(id, token), getArtistAlbums(id, token)]);
        console.log(artistAlbums)
          setArtist({
            id: artistInfo?.id ?? "",
            name: artistInfo?.name ?? "", 
            image: artistInfo?.images[0].url ?? "",  
            total_listeners: artistInfo?.followers?.total ?? 0,
            tracks,
            discography: artistAlbums,
            appears_on: tracks,
            related_artists: relatedArtists
          });
    } catch (error) {
      console.log(error) 
    }
  };

  if (param.id && auth?.spotifyToken?.access_token) {
    getArtistInfo(param.id, auth?.spotifyToken?.access_token);
  }
  }, [param.id, auth?.spotifyToken?.access_token]);

  return (
    <section className="rounded-md mb-96 md:mb-48 p-1.5 text-zinc-200">
      <div className="flex flex-col gap-2 relative">
        <img 
        src={artist?.image} 
        alt="" 
        className="rounded-md object-fill"
        />
        <div className="flex flex-col absolute top-96 w-full">
          <div className="flex flex-col backdrop-blur-md w-full">
            <span className="text-7xl font-bold pointer-events-none p-2">{artist?.name}</span>
            <span className="drop-shadow-lg p-2">{artist?.total_listeners} monthly listeners</span>
            <section className="bg-zinc-900 p-3 flex flex-col gap-3">
              {
                artist?.tracks.length 
                &&
                  (
                    <div className="max-w-[80%]">
                      <h2 className="text-xl font-bold">Popular</h2>
                      <Tracks tracks={artist?.tracks} />
                    </div>
                  ) 
              }
              {
                artist?.discography.length
                &&
                  (
                    <div>
                      <h2 className="text-xl font-bold">Discography</h2>
                      <div className="flex gap-1 overflow-x-auto scrollbar-none">
                        <Albums albums={artist.discography}/>
                      </div>
                    </div>
                  )
              }
              {
                artist?.related_artists?.length 
                &&
                  (
                    <div>
                      <h2 className="text-xl font-bold">Fans also like</h2>
                      <div className="flex gap-2 overflow-x-auto scrollbar-none p-1.5">
                        <Artists relatedArtists={artist.related_artists} />
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

export default Artist;