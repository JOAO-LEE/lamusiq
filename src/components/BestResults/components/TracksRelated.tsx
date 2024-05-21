import { BestResultsDTO } from '../../../model/Search/SearchResult'
import { getDuration } from '../../../utils/getDuration'

function TracksRelated({bestResults} : {bestResults: BestResultsDTO}) {
  return (
    <div className="col-span-2 p-3">
      <h2 className="text-2xl font-medium">Tracks</h2>
      <div className="flex flex-col">
        {
          bestResults?.tracks?.map((track, index) => (
            <div className="flex justify-between p-2" key={index}>
              <div className="flex gap-2">
                <img 
                src={track.album?.images[0].url} 
                height={track.album?.images[0].height} 
                width={track.album?.images[0].width} 
                className="size-10 rounded"
                />
                  <div className="flex flex-col gap-1">
                  <span>{track.name}</span>
                    <div className="flex items-end gap-2">
                    {track.explicit && <span className="bg-zinc-300 text-zinc-800 text-xs h-min font-extralight w-3 text-center p-0.5">E</span>}
                    <span className="text-zinc-400">{track.artist}</span>
                    </div>
                  </div>
              </div>
              <span className="text-zinc-100">{getDuration(track.duration_ms)}</span>
            </div>
          ))  
        }
      </div>
    </div>
  )
}

export default TracksRelated