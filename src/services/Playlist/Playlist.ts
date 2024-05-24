import { Playlist } from "../../model/Playlist/Playlist";

export const getPlaylistById = async (id: string, token: string) => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required");
    }
  
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
  
    if (response.status === 401) {
      throw new Error("Token not valid");
    }
  
    const playlistResult: Playlist = await response.json();
    console.log(playlistResult)
    return playlistResult;
    
  } catch (error) {
    console.log(error)
  }
}