import { useState } from "react";
import Track from "./Track/Track";
import { Tracks as TracksDTO } from "../../model/Tracks/Tracks";


function Tracks({tracks}: {tracks: Array<TracksDTO>}) {
  const [showAllTracks, setShowAllTracks] = useState<boolean>(false);
  return (
    <>
      {
        tracks.length 
        && 
          (
            <>
              {
                showAllTracks 
                ?
                (
                  <>
                    {
                      tracks.map((track, index) => (
                        <Track track={track} key={index}/>
                      ))
                    }
                  </>
                )
              : 
                (
                  <>
                    {
                      tracks.slice(0, 6).map((track, index) => (
                        <Track track={track} key={index}/>
                      ))
                    }
                  </>
                )
              }
            </>
          )
      }
      <button className="text-sm w-24 text-start" onClick={() => setShowAllTracks(!showAllTracks)}>{!showAllTracks ? "See more" : "Show less"}</button>
    </>
  )
}

// {
//   showAllTracks 
//   ?
//     (
//       <>
//         {
//           artist?.tracks.length 
//           && 
//           (
//             <>
//               {
//                 artist.tracks.map((track, index) => (
//                   <Track track={track} key={index}/>
//                 ))
//               }
//             </>
//           )
//         }
//       </>
//     )
//   : 
//     (
//       <>
//         {
//           artist?.tracks.length 
//           && 
//           (
//             <>
//               {
//                 artist.tracks.slice(0, 6).map((track, index) => (
//                   <Track track={track} key={index}/>
//                 ))
//               }
//             </>
//           )
//         }
//       </>
//     )
// }

export default Tracks