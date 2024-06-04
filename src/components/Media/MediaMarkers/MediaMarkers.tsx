import { AlertTriangle, Clock3 } from "lucide-react";
import { PageType } from "../../../enum/PageType.enum";
import { ToolTip } from "../../Tooltips/ToolTip";
import { Track } from "../../../model/Track/Track";

export function MediaMarkers({ pageType, tracks } : { pageType?: PageType, tracks?: Array<Track> }) {
  return (
    <div className="flex items-center justify-between border-b border-b-zinc-700 text-sm w-full p-4">
      <div className="flex gap-6 items-center">
        <span>#</span>
        <p>Title</p>
        {
          tracks?.length && tracks?.some(track => track.preview_url === null) 
          && 
            (
              <ToolTip
              information="Tracks with this icon does not have a preview.">
                <AlertTriangle
                className="text-zinc-500 group-hover:text-zinc-200 transition-colors"
                size={15}
                />
              </ToolTip>
            )
        }
      </div>
      {
        !!(pageType === PageType.PLAYLIST)
        && 
          (
            <>
              <div>
                <p>Album</p>
              </div>
              <div>
                <p>Added at</p>
              </div>
            </>
          )
      }
      <Clock3 
      className="w-4" 
      />
    </div>
  )
}

