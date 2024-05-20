import { SearchResult } from "../../model/Search/SearchResults";

export const getArtist = async (id: string, token: string): Promise<SearchResult | undefined> => {
  if (id && token) {
    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}`,
        {
          headers:
            {
              'Authorization': `Bearer ${token}` 
            } 
        }
      );
  
      const artistResult = await response.json();  
      return artistResult;
  
    } catch (error) {
      console.log(error)
      
    }
  }
};

export const getTopTracks = async (id: string, token: string) => {
  if (id && token) {
    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks`,
        {
          headers:
            {
              'Authorization': `Bearer ${token}` 
            } 
        }
      );

      const topTracks = await response.json();
      return topTracks;

    } catch (error) {
      console.log(error)
      
    }
  }
};

export const getRelatedArtists = async (id: string, token: string) => {
  if (id && token) {
    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`,
        {
          headers:
            {
              'Authorization': `Bearer ${token}` 
            } 
        }
      );

      const relatedArtists = await response.json();
      return relatedArtists;

    } catch (error) {
      console.log(error)
    }
  }
};

export const getArtistAlbums = async (id: string, token: string) => {
  if (id && token) {
    try {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,appears_on,compilation,single`,
        {
          headers:
            {
              'Authorization': `Bearer ${token}` 
            } 
        }
      );

      const relatedArtists = await response.json();
      return relatedArtists;

    } catch (error) {
      console.log(error)
    }
  }
};