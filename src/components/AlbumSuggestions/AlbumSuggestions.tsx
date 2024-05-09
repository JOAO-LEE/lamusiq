import { Play } from "lucide-react";

export default function AlbumSuggestions() {
  return (
    <>
        <h1 className="text-3xl font-semibold mt-10">Good Afternoon</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
                <strong>Album name</strong>
                <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20 "/>
                <strong>Album name</strong>
                <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
                <strong>Album name</strong>
                <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
                <strong>Album name</strong>
                <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
                <strong>Album name</strong>
                <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
                <strong>Album name</strong>
                <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
        </div>
  </>
  )
}

 