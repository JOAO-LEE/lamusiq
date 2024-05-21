import { CircleUser } from 'lucide-react'
import { BestResultsDTO } from '../../../model/Search/SearchResult'

function ArtistRelated({ bestResults } : { bestResults: BestResultsDTO }) {
  
  return (
    <div className="flex flex-col items-center sm:justify-center gap-2 bg-zinc-800 rounded-md p-3 transition-colors duration-100 ease-in-out hover:bg-zinc-700">
      <h2 className="text-2xl font-medium">Best result</h2>
      <div className="flex flex-col gap-2 items-center">
        {
          bestResults.image 
          ? 
          <img 
          src={bestResults?.image} 
          alt=""
          className="rounded-full size-28 object-cover" 
          />
          :
          <CircleUser className='size-28' />
        }
        <span className="font-extrabold text-xl lg:text-3xl">{bestResults?.name}</span>
        <div className="flex gap-2 text-sm text-zinc-300">
          <span className="">{bestResults?.type}</span>
        </div>
      </div>
    </div>
  )
}

export default ArtistRelated