import { useContext } from "react"
import SearchForm from "./SearchForm/SearchForm"
import { SearchContext } from "../../../../context/SearchContext/SearchContext"
import { X } from "lucide-react";

function Search() {
  const { handleSearch } = useContext(SearchContext);

  return (
    <div className="w-80 absolute bottom-40 left-16 backdrop-blur-sm rounded-md flex flex-col gap-2 mt-5 p-2 border border-zinc-700">
      <X onClick={() => handleSearch()} className="cursor-pointer hover:scale-110 transition-transform self-end" />
      <SearchForm />
    </div>
  )
}

export default Search