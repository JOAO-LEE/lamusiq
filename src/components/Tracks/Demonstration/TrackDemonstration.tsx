import { PageType } from "../../../enum/PageType.enum";
import { Track } from "../../../model/Track/Track";
import { getDuration } from "../../../utils/getDuration";
import { Interpreters } from "../../Album/Interpreters/Interpreters";

export function TrackDemonstration({ track, trackIndex, pageType }: { track: Track, trackIndex: number, pageType: PageType }) {
  return (
    <div className="flex justify-between text-zinc-300 items-center">
      <div className="flex gap-4 p-2">
        <div className="flex p-4 items-center w-5 justify-center">
          <div>
            <p className="text-lg">
              {
                pageType === PageType.ALBUM 
                ? 
                track.track_number 
                : 
                trackIndex + 1
              }
            </p>
          </div>
        </div> 
        {/* {
          showImage 
          && 
            (
              <img 
              src={track?.images[0]?.url ?? ""} 
              height={track?.album?.images[0].height} 
              width={track?.album?.images[0].width} 
              className="size-10 rounded"
              />
            )
        } */}
        <div className="flex flex-col gap-1">
          <span>{track.name}</span>
          <div className="flex items-end gap-2">
          {
            track.explicit 
            && 
              (
                <span className="bg-zinc-300 text-zinc-800 text-xs h-min font-extralight w-3 text-center p-0.5">E</span>
              )
          }
          <Interpreters media={track}/>
          </div>
        </div>
      </div>
      <span className="text-zinc-100">{getDuration(track?.duration_ms)}</span>
    </div>
  )
}
// {
//   artistsToShow.map((artist, index) => (
//     <p key={index} className="">
//       {artist.name}{index < (artistsToShow.length - 1) ? <span>,&nbsp;</span> : <span>{track.artists.length > artistsToShow.length && "..."}</span>}
//     </p>
//   ))
// }