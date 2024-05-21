import { Playlist } from "../../model/Playlist/Playlist";

export function PlaylistsMapper({ playlists }: { playlists: Array<Playlist> }) {
  return (
    <>
      {
        playlists.map((playlist) => (
          <div className="flex flex-col gap-2 p-2" key={playlist.id}>
            <div className="w-48">
              <img 
              src={playlist.images[0]?.url} 
              className="rounded-md object-cover size-48 sm:size-40"
              />
            </div>
            <div className="flex flex-col text-sm w-40">
              <span className="truncate">{playlist.name}</span>
              <span className="text-zinc-400">By {playlist.owner?.display_name}</span>
            </div>
          </div>
        ))
      }
    </>
  )
}