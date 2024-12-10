import { Route, Routes } from "react-router";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <>
      <Routes>  
        {/* <Route path="/login"  */}
        <Route path="login/*" 
          element={
            <PublicRouter>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="/*" element={ <LoginPage /> } />
              </Routes>
            </PublicRouter> 
          } 
        />

        <Route path="/*" 
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />

        {/* <Route path="/login" element={ <LoginPage /> } /> */}
        {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}

      </Routes>
    </>
  );
};

export default AppRouter;
