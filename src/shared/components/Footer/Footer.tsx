import SongInfo from './SongInfo/SongInfo'
import Player from './Player/Player'
import PlayerActions from './Player/PlayerActions'

function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-zinc-700 flex flex-col gap-2 items-center justify-center py-4 px-4 fixed bottom-0 md:flex-row md:justify-between xl:px-6 xl:py-4 w-full">
      <SongInfo />
      <Player />
      <PlayerActions />
    </footer>
  )
}

export default Footer