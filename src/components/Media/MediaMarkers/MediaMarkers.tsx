import { AlertTriangle, Clock3 } from "lucide-react";
import { PageType } from "../../../enum/PageType.enum";
import { ToolTip } from "../../Tooltips/ToolTip";

export function MediaMarkers({ pageType } : { pageType?: PageType }) {
  return (
    <div className="flex items-center justify-between border-b border-b-zinc-700 text-sm w-full p-4">
      <div className="flex gap-6">
        <span>#</span>
        <p>Title</p>
        
        <ToolTip information="Tracks with this icon does not have a preview.">
          <AlertTriangle />
        </ToolTip>
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

