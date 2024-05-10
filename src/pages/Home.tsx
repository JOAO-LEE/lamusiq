import ActionButtons from "../components/ActionButtons/ActionButtons"
import AlbumSuggestions from "../components/AlbumSuggestions/AlbumSuggestions"
import PlaylistsSuggestions from "../components/PlaylistsSuggestions/PlaylistsSuggestions"

function Home() {
  return (
    <section className="flex-1 p-6 mb-28 sm:mb-24 xl:mb-0">
      <ActionButtons />
      <AlbumSuggestions />
      <PlaylistsSuggestions />
    </section>
  )
}

export default Home
