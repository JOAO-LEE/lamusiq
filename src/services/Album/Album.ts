import { Album } from "../../model/Album/Album";
import { Track } from "../../model/Track/Track";
import { CommonSearchResponse } from "../../model/common/Common";

export const getAlbumById = async (id: string, token: string): Promise<Album | undefined> => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required");
    }

    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (response.status === 401) {
      throw new Error("Token not valid");
    }

    const albumResult: Album = await response.json();
    return albumResult;
    
  } catch (error) {
    console.log(error)
  }
};

export const getAlbumTracks = async (id: string, token: string, totalTracks: number): Promise<Array<Track> | undefined> => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required");
    }

    const response = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks?limit=${totalTracks}`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (response.status === 401) {
      throw new Error("Token not valid");
    }

    const { items: albumTracks }: CommonSearchResponse<Track> = await response.json();
    return albumTracks;
    
  } catch (error) {
    console.log(error)
  }
};