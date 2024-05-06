import { Heart } from 'lucide-react'

export default function SongInfo() {
  return (
    <div className="flex items-center gap-2">
          <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-14"/>
          <div className="flex flex-col">
            <strong className="font-normal">Elevador</strong>
            <span className="text-xs text-zinc-500">JoãoLee</span>
        </div>
          <Heart className="ml-4 size-5"/>
    </div>

  )
}
