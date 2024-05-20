import { Album as AlbumDTO } from '../../model/Album/Album'
import Album from './Album/Album'

function Albums({ albums }: { albums: Array<AlbumDTO> }) {
  return (
    <>
        {
          albums.map((record, index) => {  
            if (record.images[0]?.url) {
              return (
                <Album key={index} album={record}/>
              )
            }     
          })
        }
    </>
  )
}

export default Albums