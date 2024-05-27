import { Link } from "react-router-dom";
import { Playlist } from "../../../model/Playlist/Playlist";

export function PlaylistsMapper({ playlists }: { playlists: Array<Playlist> }) {
  return (
    <>
      {
        playlists.map((playlist) => (
          <Link
          to={`/playlist/${playlist.id}`}
          className="group flex flex-col gap-2 p-3 hover:bg-zinc-800 transition-colors duration-75
          rounded-md" 
          key={playlist.id}>
              <img 
              src={playlist.images[0]?.url} 
              className="rounded-md object-cover size-48 sm:size-40 group-hover:scale-105 transition-transform duration-500
              "
              />
            <div className="flex flex-col text-sm w-40">
              <span className="truncate">{playlist.name}</span>
              <span className="text-zinc-400">By {playlist.owner?.display_name}</span>
            </div>
          </Link>
        ))
      }
    </>
  )
}