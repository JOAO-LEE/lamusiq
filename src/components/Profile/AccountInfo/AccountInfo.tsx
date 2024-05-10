import { useAuth } from '../../../hooks/useAuth'
import { formatDate } from '../../../utils/formatDate';

function AccountInfo() {
  const auth = useAuth();
  return (
    <div className="flex flex-col gap-3 mt-5 h-full text-xl">
      <div className="flex flex-col gap-1.5">
        <span className="font-bold">You created this account using</span>
        <strong className="text-green-400 text-2xl">{auth?.user?.app_metadata.provider?.replace(auth?.user?.app_metadata.provider[0], auth?.user?.app_metadata.provider[0].toUpperCase())} at {formatDate(auth?.user?.created_at)}</strong>
      </div>
      {
        auth?.user?.app_metadata.provider === "spotify" 
        && 
          (
            <div className="flex flex-col gap-1.5">
              <span className="font-bold">Spotify username</span>
              <strong className="text-green-400">{auth.user.user_metadata.provider_id}</strong>
            </div>
          )
      }
        <span className="font-bold">Email verified {auth?.user?.user_metadata.email_verified ? <p className="text-green-400">Yes</p> : <p className="text-green-400">No</p>}</span>
        <span className="font-bold">Phone verified {auth?.user?.user_metadata.phone_verified ? <p className="text-green-400">Yes</p> : <p className="text-green-400">No</p>}</span>
    </div>
  )
}

export default AccountInfo