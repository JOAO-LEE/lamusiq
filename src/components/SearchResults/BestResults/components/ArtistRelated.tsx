import { BestResultsDTO } from '../../../../model/Search/SearchResults'

function ArtistRelated({bestResults}: {bestResults: BestResultsDTO }) {
  return (
    <div className="flex flex-col gap-2 bg-zinc-800 rounded-md p-3 transition-colors duration-100 ease-in-out hover:bg-zinc-700">
      <h2 className="text-2xl font-medium">Best result</h2>
      <div className="flex flex-col gap-2">
        <img 
        src={bestResults?.image} 
        alt=""
        className="rounded-full size-28 object-cover" 
        />
        <span className="font-extrabold text-3xl">{bestResults?.name}</span>
        <div className="flex gap-2 text-sm text-zinc-300">
          <span className="">{bestResults?.type}</span>
        </div>
      </div>
    </div>
  )
}

export default ArtistRelated