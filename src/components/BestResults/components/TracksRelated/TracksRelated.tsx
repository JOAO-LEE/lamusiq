import { PageType } from "../../../../enum/PageType.enum";
import { SearchBestResults } from "../../../../model/Search/SearchResult";
import { TrackDemonstration } from "../../../Track/Demonstration/TrackDemonstration";

export function TracksRelated({ bestResults } : { bestResults: SearchBestResults }) {
  return (
    <div className="col-span-2 p-3">
      <h2 className="text-2xl font-medium">Tracks</h2>
      <div className="flex flex-col">
        {
          bestResults.tracks.length
          &&
            (
              <>
                {
                   bestResults?.tracks.map((track, index) => (
                    <TrackDemonstration 
                    pageType={PageType.SEARCH}
                    trackIndex={index}
                    track={track} 
                    key={index}
                    />
                  ))  
                }
              </>
            )
        }
      </div>
    </div>
  )
}