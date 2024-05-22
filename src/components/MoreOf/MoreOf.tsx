import { useEffect, useState } from "react";
import { Album } from "../../model/Album/Album";
import { AlbumsMapper } from "../Album/Mapper/AlbumsMapper";
import { getArtistAlbums } from "../../services/Artist/getArtist";
import { useAuth } from "../../hooks/useAuth";
import { Artist } from "../../model/Artist/Artist";

export function MoreOf({ album }: { album: Album | undefined }) {
  const [moreOf, setMoreOf] = useState<[Array<Album> | undefined][]>();
  const auth = useAuth();

  useEffect(() => {

    const getMoreOf = async (artists: Array<Artist>, token: string) => {
      const moreOfPromises = artists
        .map(async (artist) => {
          const result = await Promise.all([getArtistAlbums(artist.id, token)])
          return result;
        });
      const moreOfResults = await Promise.all(moreOfPromises);
      setMoreOf(moreOfResults)
    };

    if (album && auth?.spotifyToken?.access_token) {
      getMoreOf(album.artists, auth.spotifyToken.access_token)
    }

  }, [album, auth?.spotifyToken?.access_token]);
  
  return (
    <>
      {
        moreOf?.length 
        &&
          (
            <>
              {
                moreOf.map((more, indexI) => (
                  <div className="mt-10" key={indexI}>
                    {
                      more.length 
                      &&
                      <>
                        {
                          more.map((albums, indexJ) => (
                            <div key={indexJ}>
                              {
                                albums?.length
                                &&
                                  (
                                    <>
                                    <h2 className="text-xl font-bold">More of {albums[0].artists[0].name}</h2>
                                      <div className="flex gap-1 overflow-x-auto scrollbar-none">
                                        <AlbumsMapper 
                                        albums={albums} 
                                        />
                                      </div>
                                    </>
                                  )
                              }
                            </div>
                        ))}
                      </>
                    }
                  </div>
                ))
              }
            </>
          )
      }
    </>
  )
}
