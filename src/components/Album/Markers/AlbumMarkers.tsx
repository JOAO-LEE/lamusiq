import { Clock3 } from 'lucide-react';
function AlbumMarkers() {
  return (
    <div className="flex justify-between items-center border-b border-b-zinc-700 text-sm">
      <div className="flex gap-6 p-4">
        <span>#</span>
        <p>Title</p>
      </div>
      <Clock3 className="w-4" />
  </div>
  )
}

export default AlbumMarkers