import { Footer, Header, Siderbar } from "../components";
import { Outlet } from "react-router-dom";
import "../styles/global.css";

export const Layout = () => {
  return (
    <div className="flex">
      <Siderbar />

      <div className="flex-1 bg-secondary-900 text-secondary-100 transition-all duration-300">
        <Header />

        <main className="lg:pl-300 mt-24">
          <div className="px-10 py-5">
            {/* Inyectar contenido dinamicamente */}
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
