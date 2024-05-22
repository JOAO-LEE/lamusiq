import { Link } from "react-router-dom";
import { Album } from "../../../model/Album/Album";
import { Track } from "../../../model/Track/Track";

export function Interpreters({ media }: { media: Album | Track }) {
  console.log(media)
  return (
    <>
     {
      media?.artists.length > 1
      ?
        (
          <>
            {
              media.artists.map((artist, index) => (
                <p key={index} className="hover:underline hover:text-zinc-200 transition-all"><Link to={`/artist/${artist.id}`}>{artist.name}</Link>{media.artists.length - 1 !== index && <span>,</span>}</p>
              ))
            }
          </>
        )
      : 
        (
          <p className="hover:underline hover:text-zinc-200 transition-all"><Link to={`/artist/${media?.artists[0]?.id}`}>{media?.artists[0]?.name}</Link></p>
        )
      }
    </>
  )
}