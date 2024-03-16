import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { DetailMovie, Home, Favorites } from "../pages";
import SearchMovie from "../pages/SearchMovie";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/datail/:id" element={<DetailMovie />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:title" element={<SearchMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
