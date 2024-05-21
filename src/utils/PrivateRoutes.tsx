import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading/Loading";

function PrivateRoutes() {
  const auth = useAuth();
  console.log(auth)

  if (auth?.isLoading) {
    return <Loading />
  } 

  if (auth === null || auth?.session === null) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}

export default PrivateRoutes;