import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { DetailMovie, Home } from "../pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/datail/:id" element={<DetailMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
