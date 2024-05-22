import { useState } from "react";
import { TrackDemonstration } from "../Demonstration/TrackDemonstration";
import { Track } from "../../../model/Track/Track";
import { PageType } from "../../../enum/PageType.enum";


export function TrackMapper({ tracks, pageType }: { tracks: Array<Track>, pageType: PageType}) {
  const [showAllTracks, setShowAllTracks] = useState<boolean>(false);
  console.log(tracks)
  return (
    <>
      {
        tracks?.length 
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
                        <TrackDemonstration 
                        pageType={pageType}
                        trackIndex={index}
                        track={track} 
                        key={index}
                        />
                      ))
                    }
                  </>
                )
              : 
                (
                  <>
                    {
                      tracks.slice(0, 6).map((track, index) => (
                        <TrackDemonstration 
                        trackIndex={index}
                        pageType={pageType}
                        track={track} 
                        key={index}
                        />
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