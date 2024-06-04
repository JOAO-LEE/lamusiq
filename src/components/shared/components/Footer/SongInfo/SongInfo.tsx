import { Heart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { TrackContext } from "../../../../../context/TrackContext/TrackContext";
import { Track } from "../../../../../model/Track/Track";
import { useAuth } from "../../../../../hooks/useAuth";
import { getTrack as getTrackById } from "../../../../../services/Track/Track";

export default function SongInfo() {
  const { track } = useContext(TrackContext);
  const auth = useAuth();
  const [choosenTrack, setChoosenTrack] = useState<Track>();

  useEffect(() => {
    const getTrack = async (id: string, token: string) => {
      const fetchedTrack = await getTrackById(id, token);
      setChoosenTrack(fetchedTrack);

    };

    if (track && auth?.spotifyToken?.access_token) {
      getTrack(track.id, auth.spotifyToken.access_token);
    }

  }, [track])

  return (
    <>
      {
        !track 
        ? 
          (
            <></>
          ) 
        : 
          (
            <div className="flex items-center justify-center gap-2 w-1/3">
              {track.images && track.images.length > 0 && (
                <img
                  src={choosenTrack?.album?.images[0]?.url}
                  alt="Album cover"
                  className="hidden md:inline size-14"
                />
              )}
              <div className="flex flex-col items-center sm:items-center md:items-start w-full xl:w-max">
                <strong className="font-normal line-clamp-1 min-w-fit">{track?.name}</strong>
                <span className="text-xs text-zinc-500">
                  {track?.artists && track.artists.length > 0 ? track.artists[0].name : "Unknown Artist"}
                </span>
              </div>
              {/* <Heart className="hidden md:inline ml-4 md:size-10"/> */}
            </div>
          )
      }
    </>
  );
}
 