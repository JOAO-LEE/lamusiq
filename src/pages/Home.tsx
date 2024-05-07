import ActionButtons from "../components/ActionButtons"
import AlbumSuggestions from "../components/AlbumSuggestions/AlbumSuggestions"
import PlaylistsSuggestions from "../components/PlaylistsSuggestions/PlaylistsSuggestions"

function Home() {
  return (
    <main className="flex-1 p-6">
      <ActionButtons />
      <AlbumSuggestions />
      <PlaylistsSuggestions />
    </main>
  )
}

export default Home