import { Link, useNavigate } from "react-router-dom";
import { Album } from "../../../model/Album/Album";
import { getYear } from "../../../utils/formatDate";
import { Interpreters } from "../Interpreters/Interpreters";

export function AlbumDemonstration({ album }: { album: Album }) {
  const navigate = useNavigate();

  const goToAlbumPage = (albumId: string) => {
    navigate(`/album/${albumId}`);
  };

  return (
    <div
    className="group flex flex-col items-center gap-2 p-3 hover:bg-zinc-800 duration-75 rounded-md" key={album.id}>
      <div
      onClick={() => goToAlbumPage(album.id)} 
      className="cursor-pointer">
        <img 
        src={album.images[0]?.url} 
        className="rounded-md object-cover size-48 sm:size-40 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-1 w-48">
        <span 
        className="text-sm truncate cursor-pointer hover:underline" 
        onClick={() => goToAlbumPage(album.id)}>
          {album.name}
        </span>
        <div className="flex gap-1 text-xs text-gray-500">
          <span>{getYear(album.release_date)}</span>
          <span>•</span>
          <div className="text-xs flex gap-1 truncate">
            <Interpreters album={album}/>
          </div>
        </div>
      </div>
    </div>
  )
}