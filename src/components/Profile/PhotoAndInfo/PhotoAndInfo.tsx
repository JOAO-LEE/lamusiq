
import { useAuth } from '../../../hooks/useAuth'
import { UserCircle } from 'lucide-react'

function PhotoAndInfo() {
  const auth = useAuth()
  return (
    <div className="flex flex-col items-start md:flex-row gap-2 md:items-center">
          <div>
            {
              auth?.user?.user_metadata?.avatar_url 
              ? 
                (
                  <>
                    <img src={auth?.user?.user_metadata?.avatar_url} className="size-16 p-1 border border-zinc-700 rounded-full object-"/> 
                  </>
                )
              : 
              <UserCircle className="size-16"/> 
            }
          </div>
          <div className="flex flex-col">
            <span className="text-green-400 text-3xl font-semibold">{auth?.user?.user_metadata.full_name}</span>
            <span className="text-zinc-500 font-light">{auth?.user?.user_metadata.email}</span>
          </div>
        </div> 
  )
}

export default PhotoAndInfo