import { Track } from "../../model/Track/Track";

export const getTrack = async (id: string, token: string) => {
  try {
    if (!id || !token) {
      throw new Error("id and token are required")
    }
    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`,
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
    
    const artistResult: Track = await response.json();  
    return artistResult;
  
  } catch (error) {
    console.log(error)
  }
};