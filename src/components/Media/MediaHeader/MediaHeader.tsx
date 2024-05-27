import { Album } from "../../../model/Album/Album";
import { Playlist } from "../../../model/Playlist/Playlist";
import { getYear } from "../../../utils/formatDate";
import { Interpreters } from "../../Album/Interpreters/Interpreters";
import { isAlbum } from "../../../utils/typeOfMedia";

export function MediaHeader({ media }: { media: Album | Playlist }) {

  return (
    <div className="flex gap-2 p-6 text-zinc-100">
      <img 
      src={media?.images[0]?.url} 
      alt="" 
      height={media?.images[0]?.height} 
      width={media?.images[0]?.width} 
      className="object-contain w-36" 
      />
      <div className="flex flex-col justify-between p-3 gap-2">
      <p className="text-xs font-medium">{media?.type.replace(media?.type[0], media?.type[0].toUpperCase())}</p>
        <h1 className="font-extrabold text-7xl  w-full line-clamp-1">{media?.name}</h1>
        {
          !isAlbum(media) 
          && 
            (
              <p className="text-xs">{media.description}</p>
            )
        }
        <div className="flex text-xs gap-1.5 p-1">
          {
            isAlbum(media)
            ?
              (
                <>
                  <Interpreters media={media} />
                  <span>•</span>
                  <span>{media?.release_date && getYear(media?.release_date)}</span>
                  <span>•</span>
                  <span>{media?.total_tracks} { media?.total_tracks && media?.total_tracks > 1 ? "tracks" : "track" }</span>
                </>
              )
            :
              (
                <>
                  <p className="font-extrabold">{media?.owner?.display_name}</p>
                  <span>•</span>
                  <p className="font-medium">{media?.followers?.total?.toLocaleString('en-US')} {media?.followers?.total > 1 ? "likes" : "like"}</p>
                  <span>•</span>
                  <p className="font-medium">{media?.tracks?.total} tracks</p>
                </>
              )    
          }  
        </div>
      </div>
    </div>
  )
}