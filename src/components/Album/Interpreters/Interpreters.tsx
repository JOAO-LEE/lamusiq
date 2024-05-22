import { Link } from "react-router-dom";
import { Album } from "../../../model/Album/Album";

export function Interpreters({ album }: { album: Album }) {
  return (
    <>
     {
      album?.artists.length > 1
      ?
        (
          <>
            {
              album.artists.map((artist, index) => (
                <p key={index} className="hover:underline"><Link to={`/artist/${artist.id}`}>{artist.name}</Link>{album.artists.length - 1 !== index && <span>,</span>}</p>
              ))
            }
          </>
        )
      : 
        (
          <Link to={`/artist/${album?.artists[0]?.id}`}>{album?.artists[0]?.name}</Link>
        )
      }
    </>
  )
}