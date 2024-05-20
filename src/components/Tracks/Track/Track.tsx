import { Tracks } from "../../../model/Tracks/Tracks";
import { getDuration } from "../../../utils/getDuration";

function Track({ track }: { track: Tracks }) {
  const maxArtistsToShow = 4;
  const artistsToShow = track.artists.slice(0, maxArtistsToShow);
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-2">
        <img 
        src={track?.album?.images[0].url} 
        height={track?.album?.images[0].height} 
        width={track?.album?.images[0].width} 
        className="size-10 rounded"
        />
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
          {
            track.artists.length === 1 
            ?
              (
                <>
                  <p className="text-zinc-400">{track?.artists[0]?.name}</p>
                </>
              )
            :
              (
                <div className="flex">
                  {
                    artistsToShow.map((artist, index) => (
                      <p key={index} className="">
                        {artist.name}{index < (artistsToShow.length - 1) ? <span>,&nbsp;</span> : <span>{track.artists.length > artistsToShow.length && "..."}</span>}
                      </p>
                    ))
                  }
                </div>
              )
          }
          </div>
        </div>
      </div>
      <span className="text-zinc-100">{getDuration(track?.duration_ms)}</span>
    </div>
  )
}

export default Track