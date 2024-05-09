import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PrivateRoutes() {
  const auth = useAuth();
  console.log(auth.session)
  return (
    <>
      { 
        auth.session !== null 
        ?
          (
            <Outlet />
          )
        :
          (
            <Navigate to="/sign-in" replace /> 
          ) 
        }
    </>
  )
}

export default PrivateRoutes