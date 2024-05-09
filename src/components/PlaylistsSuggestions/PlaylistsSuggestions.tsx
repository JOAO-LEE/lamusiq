export default function PlaylistsSuggestions() {
  return (
    <>
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-xl md:text-2xl font-semibold">Made for João Lima</h2>
        <a href="" className="text-xs text-zinc-700 hover:text-zinc-100 transition-colors">Show all</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
        <a className="group bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="group-hover:scale-105 transition duration-500 ease-in-out rounded-lg"/>
          <strong className="group-hover:scale-[1.02] transition duration-500">Daily Mix 1</strong> 
          <span className="text-sm text-zinc-700 group-hover:text-zinc-50 transition-colors duration-500">Josman, Nekfeu, Arma Jackson and more</span> 
        </a>
        <a className="group bg-white/5 p-3 rounded-md flex flex-col gap-2">
          <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="group-hover:scale-[1.02] transition duration-500 ease-in-out rounded-lg"/>
          <strong className="group-hover:scale-[1.02] transition duration-500">Daily Mix 1</strong> 
          <span className="text-sm text-zinc-700 group-hover:text-zinc-50 transition-colors duration-500">Josman, Nekfeu, Arma Jackson and more</span> 
        </a>
      </div>
    </>
  )
}

