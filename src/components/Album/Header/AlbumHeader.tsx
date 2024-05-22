import { Album } from "../../../model/Album/Album";
import { getYear } from "../../../utils/formatDate";
import { Interpreters } from "../Interpreters/Interpreters";

function AlbumHeader({ album }: { album: Album }) {
  return (
    <div className="flex gap-2 p-6 text-zinc-100">
      <img 
      src={album?.images[0]?.url} 
      alt="" 
      height={album?.images[0]?.height} 
      width={album?.images[0]?.width} 
      className="object-contain w-36" 
      />
      <div className="flex flex-col justify-between p-3">
        <span className="text-xs">{album?.album_type.replace(album?.album_type[0], album?.album_type[0].toUpperCase())}</span>
        <h1 className="font-extrabold text-7xl  w-full line-clamp-1">{album?.name}</h1>
        <div className="flex text-xs gap-1.5 p-1">
          <Interpreters media={album} />
          <span>•</span>
          <span>{album?.release_date && getYear(album?.release_date)}</span>
          <span>•</span>
          <span>{album?.total_tracks} { album?.total_tracks && album?.total_tracks > 1 ? "tracks" : "track" }</span>
        </div>
      </div>
    </div>
  )
}

export default AlbumHeader