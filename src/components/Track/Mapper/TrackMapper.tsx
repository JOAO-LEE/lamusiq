import { useEffect, useState } from "react";
import { TrackDemonstration } from "../Demonstration/TrackDemonstration";
import { Track } from "../../../model/Track/Track";
import { PageType } from "../../../enum/PageType.enum";

const MAX_TRACKS = 6;

export function TrackMapper({ tracks, pageType }: { tracks: Array<Track>, pageType: PageType}) {
  const [showAllTracks, setShowAllTracks] = useState<boolean>(false);
  const [maxTracks, setMaxTracks] = useState<Array<Track>>([]);

  useEffect(() => {
    if (tracks) {
      setMaxTracks(tracks.slice(0, MAX_TRACKS));
    }

  }, []);

  return (
    <>
      {
        !!(tracks?.length && maxTracks?.length)
        && 
          (
            <>
              {
                showAllTracks 
                ?
                  (
                    <>
                      {

                        tracks.map((track, index) =>  (
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
                        maxTracks?.map((track, index) => (
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
              }
              {
                tracks.length > maxTracks?.length
                && 
                  (
                    <button className="text-sm w-24 text-start" onClick={() => setShowAllTracks(!showAllTracks)}>{!showAllTracks ? "See more" : "Show less"}</button>
                  )
              }
            </>
          )
      }
    </>
  )
}