import { RelatedArtist } from "../../model/Artist/Artist"

function Artists({ relatedArtists } : { relatedArtists: Array<RelatedArtist> }) {
  return (
    <>
      {
        relatedArtists.map((relatedArtist) => {       
          if (relatedArtist.images[0]?.url) {
            return (
              <a href={`/artist/${relatedArtist.id}`} className="group flex flex-col gap-2 items-center p-3 min-w-max hover:bg-zinc-800 transition-colors duration-75 rounded-md" key={relatedArtist.id}>
                <img 
                src={relatedArtist.images[0]?.url} 
                className="rounded-full object-cover size-48 sm:size-40 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="flex flex-col text-center">
                  <span className="text-lg group-hover:scale-[1.02] transition-all duration:500">{relatedArtist.name}</span>
                  <span className="text-zinc-600">Artist</span>
                </div>
              </a>
            )
          }
        }
      )}
    </>
  )
}

export default Artists;