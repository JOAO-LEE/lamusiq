export const getAlbumById = async (id: string, token: string) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const albumResult = await response.json();
    return albumResult;
    
  } catch (error) {
    console.log(error)
  }
};

export const getAlbumTracks = async (id: string, token: string, totalTracks: number) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks?limit=${totalTracks}`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const tracksResult = await response.json();
    console.log(tracksResult)
    return tracksResult;
    
  } catch (error) {
    console.log(error)
  }
};