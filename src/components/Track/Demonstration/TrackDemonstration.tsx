import { useContext } from "react";
import { PageType } from "../../../enum/PageType.enum";
import { Track,  } from "../../../model/Track/Track";
import { formatAmericanDate } from "../../../utils/formatDate";
import { getDuration } from "../../../utils/getDuration";
import { MediaInterpreters } from "../../Media/MediaInterpreters/MediaInterpreters";
import { TrackNum } from "../components/TrackNum";
import { TrackContext } from "../../../context/TrackContext/TrackContext";
import { Pause, Play, TriangleAlert } from "lucide-react";
import { ToolTip } from "../../Tooltips/ToolTip";

export function TrackDemonstration({ track, trackIndex, pageType }: { track: Track , trackIndex: number, pageType: PageType }) {
  const { playTrack, track: trackPlaying } = useContext(TrackContext);

  return (
    <div 
    className="group flex gap-2 justify-between items-center text-zinc-300 rounded-lg hover:bg-zinc-800 p-2 cursor-pointer"
    onDoubleClick={() => playTrack(track)}
    >
      <div className={`flex gap-2 items-center`}>
        <div className="flex w-5">
          <div className="text-center">
            <TrackNum 
            pageType={pageType} 
            trackIndex={trackIndex} 
            trackNumber={track.track_number}
            />
          </div>
        </div> 
        {
          pageType !== PageType.ALBUM
          && 
            (
              <div className="relative">
                <img 
                src={track?.album?.images[0]?.url ?? ""}
                className="group max-w-10"
                />
                {
                  trackPlaying?.id === track.id
                  ?
                    (
                      <Pause
                      size={"1rem"}
                      className="absolute right-3 bottom-3" 
                      fill="white"
                      />
                    )
                  :
                    (
                      <Play 
                      size={"1rem"}
                      className="hidden group-hover:block absolute right-3 bottom-3" 
                      fill="white"
                      />
                    )
                }
              </div>
            )
        } 
        <div className="flex flex-col gap-1 truncate">
          <span>{track?.name}</span>
          <div className="flex items-end gap-2 text-nowrap">
            {
              track.explicit
              &&

                (
                  <span className="bg-zinc-300 text-zinc-800 text-xs h-min font-extralight w-3 text-center p-0.5">E</span>
                )
            }
            <MediaInterpreters 
            media={track}
            />
          </div>
        </div>
        {
          track.preview_url === null 
          && 
            (
              <ToolTip information="No preview available.">
                <TriangleAlert 
                size={15}
                className="text-zinc-700 group-hover:text-yellow-400" 
                /> 
              </ToolTip>
            )
        }
      </div>
      <>
        {
          !!(pageType === PageType.PLAYLIST)
          &&
            (
              <div className="w-1/4">
                <p>{track.album.name}</p>
              </div>
            )
        }
      </>
      <>
        {
          !!((pageType === PageType.PLAYLIST) && track.added_at)
          &&
            (
              <div className="w-1/4">
                <p>{formatAmericanDate(track.added_at)}</p>
              </div>
            )
        }
      </>
      {
        <span 
        className="text-zinc-100">
          {getDuration(track?.duration_ms)}
        </span>
      }
    </div>
  )
}