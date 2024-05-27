import { Clock3 } from "lucide-react";
import { PageType } from "../../../enum/PageType.enum";

export function MediaMarkers({ pageType } : { pageType?: PageType }) {
  return (
    <div className="flex items-center justify-between border-b border-b-zinc-700 text-sm w-full p-4">
      <div className="flex gap-6 w-1/4">
        <span>#</span>
        <p>Title</p>
      </div>
      {
        !!(pageType === PageType.PLAYLIST)
        && 
          (
            <>
              <div className="w-1/4">
                <p>Album</p>
              </div>
              <div className="w-1/4">
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

