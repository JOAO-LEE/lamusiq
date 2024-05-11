import { useContext } from "react"
import ActionButtons from "../components/ActionButtons/ActionButtons"
import AlbumSuggestions from "../components/AlbumSuggestions/AlbumSuggestions"
import PlaylistsSuggestions from "../components/PlaylistsSuggestions/PlaylistsSuggestions"
import { SearchContext } from "../context/SearchContext/SearchContext"

function Home() {
  const {isSearchOpen} = useContext(SearchContext);
  
  return (
    <section className={`${isSearchOpen ? "hidden md:inline md:blur md:pointer-events-none" : "inline flex-1 p-6 mb-28 sm:mb-24 xl:mb-0" }`}>
      <ActionButtons />
      <AlbumSuggestions />
      <PlaylistsSuggestions />
    </section>
  )
}

export default Home
