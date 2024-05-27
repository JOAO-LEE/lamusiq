import { SearchResults } from "../../model/Search/SearchResult";

export const getSearch = async (searchTerm: string, token: string): Promise<SearchResults | undefined> => {
  try {
    if (!searchTerm || !token) {
      throw new Error("Token and search term are required.");

    }

    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album,artist,playlist,track,show,episode,audiobook`,
      {
        headers:
          {
            'Authorization': `Bearer ${token}` 
          } 
      }
    );

    if (response.status === 401) {
      throw new Error("An error occurred.");
    }

    const searchResults: SearchResults  = await response.json();
    return searchResults;

  } catch (err) {
    console.log(err)
  }
}