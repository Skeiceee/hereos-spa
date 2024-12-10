import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router";

const PublicRouter = ({ children }) => {

  const { logged } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath") || "/";

  return !logged 
    ? children 
    : <Navigate to={lastPath} />;
};

export default PublicRouter;
