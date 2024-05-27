import ActionButtons from "../components/ActionButtons/ActionButtons"
import AlbumSuggestions from "../components/Album/Suggestions/AlbumSuggestions"
import PlaylistsSuggestions from "../components/Playlist/PlaylistsSuggestions/PlaylistsSuggestions"

export function HomePage() {  
  return (
    <section className="p-6 mb-28 sm:mb-24 xl:mb-0">
      <ActionButtons />
      <AlbumSuggestions />
      <PlaylistsSuggestions />
    </section>
  )
}