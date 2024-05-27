import { PageType } from "../../../enum/PageType.enum";
import { Track,  } from "../../../model/Track/Track";
import { formatAmericanDate } from "../../../utils/formatDate";
import { getDuration } from "../../../utils/getDuration";
import { MediaInterpreters } from "../../Media/MediaInterpreters/MediaInterpreters";

export function TrackDemonstration({ track, trackIndex, pageType }: { track: Track , trackIndex: number, pageType: PageType }) {
  console.log(track?.album?.images)
  return (
    <div className="flex items-center justify-between text-zinc-300 rounded-lg hover:bg-zinc-800 p-2">
      <div className={`flex gap-4 items-center ${pageType !== PageType.SEARCH && "w-1/4"}`}>
        <div className="flex items-center w-5 justify-center">
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
        {
          pageType !== PageType.ALBUM 
          && 
            (
              <img 
              src={track?.album?.images[0]?.url ?? ""} 
              height={track?.album?.images[0].height} 
              width={track?.album?.images[0].width} 
              className="size-10 rounded"
              />
            )
        } 
        <div className="flex flex-col gap-1">
          <span>{track?.name}</span>
          <div className="flex items-end gap-2">
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