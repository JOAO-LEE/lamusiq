import { Link } from "react-router-dom";
import { Album } from "../../../model/Album/Album";
import { Track, TrackFromPlaylist } from "../../../model/Track/Track";
import { isTrackFromPlaylist } from "../../../utils/typeOfMedia";


export function Interpreters({ media }: { media: Album | Track  }) {
  return (
    <>
      {
        media.artists.map((artist, index) => (
          <p key={index} className="hover:underline hover:text-zinc-200 transition-all font-light">
            <Link to={`/artist/${artist.id}`}>{artist?.name}</Link>{media?.artists?.length - 1 !== index && <span>,</span>}
          </p>
        )) 
      }
    </>
  )
}

   // <>
    //  {
    //  (!isTrackFromPlaylist(media)
    //   ?
    //   media?.artists?.length > 1
    //   :
    //   media?.track?.artists?.length > 1)
    //   ?
    //     (
    //       <>
    //         {
    //           !isTrackFromPlaylist(media)
    //           ?
    //           media.artists.map((artist, index) => (
    //             <p key={index} className="hover:underline hover:text-zinc-200 transition-all font-extrabold">
    //               <Link to={`/artist/${artist.id}`}>{artist?.name}</Link>{media?.artists?.length - 1 !== index && <span>,</span>}</p>
    //           )) 
    //           :
    //           media.track.artists.map((artist, index) => (
    //             <p key={index} className="hover:underline hover:text-zinc-200 transition-all font-extrabold"><Link to={`/artist/${artist.id}`}>{artist.name}</Link>{media.track.artists.length - 1 !== index && <span>,</span>}</p>
    //           )) 
    //         }
    //       </>
    //     )
    //   :  */}
    //   <p>oi</p>
        // {/* // (
        //   !isTrackFromPlaylist(media)
        //   ?
        //     (
        //       <p className="hover:underline hover:text-zinc-200 transition-all font-extrabold"><Link to={`/artist/${media?.artists[0]?.id}`}>{media?.artists[0]?.name}</Link></p>
        //     )
        //   : (
        //     <p className="hover:underline hover:text-zinc-200 transition-all font-extrabold"><Link to={`/artist/${media?.track?.artists[0]?.id}`}>{media?.track?.artists[0]?.name}</Link></p>

        //     )
        // )
      // }
    // </>