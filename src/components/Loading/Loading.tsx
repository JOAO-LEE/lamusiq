import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <section className="h-screen flex flex-col gap-2 justify-center items-center">
      <LoaderCircle size={60} className="text-green-400 animate-spin"/>
      <span className="text-4xl text-green-300 animate-pulse">lamusiq</span>
      <div>
        <span className="">A Spotify <img src="src/assets/images/spotify_icon_green.png" className="size-5 inline"/> clone</span>
      </div>
    </section>
  )
}

export default Loading