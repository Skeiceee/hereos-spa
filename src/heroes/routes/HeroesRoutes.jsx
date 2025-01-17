import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../ui";
import { DCPage, MarvelPage, SearchPage, HeroPage } from "../pages";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DCPage />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
