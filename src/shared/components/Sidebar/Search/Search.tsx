import { useContext } from "react"
import SearchForm from "./SearchForm/SearchForm"
import { SearchContext } from "../../../../context/SearchContext/SearchContext"
import { X } from "lucide-react";

function Search() {
  const { handleSearch } = useContext(SearchContext);

  return (
    <div className="flex flex-col gap-2 mt-5 p-2">
        <X onClick={() => handleSearch()} className="cursor-pointer hover:scale-110 transition-transform" />
        <SearchForm />
    </div>
  )
}

export default Search