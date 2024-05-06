import SongInfo from './SongInfo/SongInfo'
import Player from './Player/Player'
import PlayerActions from './Player/PlayerActions'

function Footer() {
  return (
    <footer className='bg-neutral-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <SongInfo />
        <Player />
        <PlayerActions />
    </footer>
  )
}

export default Footer