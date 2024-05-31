import { ReactNode, useState } from "react";
import { SearchContext } from "./SearchContext";

export function SearchProvider({children}: {children: ReactNode}) {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <SearchContext.Provider 
    value={{isSearchOpen, handleSearch}}
    >
      {children}
    </SearchContext.Provider>
  )
}