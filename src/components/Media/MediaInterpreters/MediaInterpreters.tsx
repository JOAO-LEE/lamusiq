import { Link } from "react-router-dom";
import { Album } from "../../../model/Album/Album";
import { Track } from "../../../model/Track/Track";

export function MediaInterpreters({ media }: { media: Album | Track }) {
  
  return (
    <>
      {
        media.artists.map((artist, index) => (
          <p 
          key={index} 
          className="hover:underline hover:text-zinc-200 transition-all font-light text-xs">
            <Link 
            to={`/artist/${artist.id}`}>
              {artist?.name.trim()}
            </Link>{media?.artists?.length - 1 !== index && <span>,&nbsp;</span>}
          </p>
        )) 
      }
    </>
  )
}