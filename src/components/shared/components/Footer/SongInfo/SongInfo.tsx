import { Heart } from 'lucide-react'

export default function SongInfo() {
  return (
    <div className="flex items-center justify-center gap-2 w-1/3">
      <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="hidden md:inline size-14"/>
      <div className="flex flex-col items-center sm:items-center md:items-start w-full xl:w-max">
        <strong className="font-normal line-clamp-1 min-w-fit">Polo Branca (part. MCs Kako, Vinny, Leozinho ZS, Piedro e Magal)</strong>
        <span className="text-xs text-zinc-500">JoãoLee</span>
      </div>
      <Heart className="hidden md:inline ml-4 md:size-10"/>
    </div>
  )
}
