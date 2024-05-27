import { CircleX } from "lucide-react";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../../../../../context/SearchContext/SearchContext";

function SearchForm() {
  const {handleSearch, isSearchOpen} = useContext(SearchContext)
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const getSearchResults = async (e: FormEvent): Promise<void> => {
    e.preventDefault();  
    if (!search) return;
    handleSearch();
    navigate(`/search/results?q=${search.trim()}`);
  };

  return (
    <form className="group flex flex-col gap-2" onSubmit={(e) => getSearchResults(e)}>
      <label className="text-xs text-zinc-200 group-hover:text-zinc-50" htmlFor="search">Search playlists, songs, albums or artists</label>
      <div className="flex items-center gap-2 bg-zinc-50 rounded-full p-2 w-full text-zinc-800">
        <input disabled={!isSearchOpen} type="text" id="search" className={`rounded-full p-2  w-full outline-none ${!isSearchOpen && "pointer-events-none"}` } value={search} onChange={(e) => setSearch(e.target.value)}
        spellCheck={false}
        />
        <CircleX onClick={() => setSearch("")} className="cursor-pointer"  />
      </div>
    </form>
  )
}

export default SearchForm;