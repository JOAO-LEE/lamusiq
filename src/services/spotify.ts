import { SpotifyTokenResponse } from "../model/SpotifyTokenResponse";
import { requestBody } from "../utils/fetchRelated";

export const getSpotifyToken = async (): Promise<SpotifyTokenResponse> => {
  const response = await fetch("https://accounts.spotify.com/api/token", 
    {
      method: 'POST',
      headers: {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      body: requestBody
    }
  );
  
  const result = await response.json()
  return result;
};