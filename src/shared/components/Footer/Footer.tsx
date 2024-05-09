import SongInfo from './SongInfo/SongInfo'
import Player from './Player/Player'
import PlayerActions from './Player/PlayerActions'

function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-zinc-700 flex gap-2 flex-col items-center justify-center py-1 xl:flex-row md:justify-between fixed bottom-0 md:static xl:px-6 xl:py-4 w-full">
        <SongInfo />
        <Player />
        <PlayerActions />
    </footer>
  )
}

export default Footer