import { Album as AlbumDTO } from '../../model/Album/Album'
import Album from './Album/Album'

function Albums({ albums, artistId }: { albums: Array<AlbumDTO>, artistId: string }) {
  return (
    <>
        {
          albums.map((record, index) => {  
            if (record.images[0]?.url) {
              return (
                <Album key={index} album={record} artistId={artistId}/>
              )
            }     
          })
        }
    </>
  )
}

export default Albums