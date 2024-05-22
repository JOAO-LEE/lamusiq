import { Album, ArtistAlbumsResponse } from "../../model/Album/Album";
import { Artist, ArtistResult } from "../../model/Artist/Artist";
import { Track, TracksResult } from "../../model/Track/Track";

export const getArtist = async (id: string, token: string): Promise<Artist | undefined> => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required")
    }
    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`,
    {
      headers:
        {
          'Authorization': `Bearer ${token}` 
        } 
    }
  );

    if (response.status === 401) {
      throw new Error("Token not valid");
    }
    
    const artistResult: Artist = await response.json();  
    return artistResult;
  
  } catch (error) {
    console.log(error)
  }
};

export const getTopTracks = async (id: string, token: string): Promise<Array<Track> | undefined> => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required")
    }

    const response = await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks`,
      {
        headers:
          {
            'Authorization': `Bearer ${token}` 
          } 
      }
    );

    if (response.status === 401) {
      throw new Error("Token not valid");
    }

    const { tracks }: TracksResult = await response.json();
    return tracks;

  } catch (error) {
    console.log(error)
  }
};

export const getRelatedArtists = async (id: string, token: string): Promise<Array<Artist> | undefined> => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required")
    }

    const response = await fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`,
      {
        headers:
          {
            'Authorization': `Bearer ${token}` 
          } 
      }
    );

    if (response.status === 401) {
      throw new Error("Token not valid");
    }

    const { artists }: ArtistResult = await response.json();
    return artists;

  } catch (error) {
    console.log(error)
  }
};


export const getArtistAlbums = async (id: string, token: string): Promise<Array<Album> | undefined> => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required")
    }

    const response = await fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,appears_on,compilation,single`,
      {
        headers:
          {
            'Authorization': `Bearer ${token}` 
          } 
      }
    );

    if (response.status === 401) {
      throw new Error("Token not valid");
    }

    const { items }: ArtistAlbumsResponse = await response.json();
    console.log(items)
    return items;

  } catch (error) {
    console.log(error)
  }
};