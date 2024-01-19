import { Footer, Header, Siderbar } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex">
      <Siderbar />

      <div className="w-full flex-1">
        <Header />

        <main className="pl-0">
          <div className="p-10">
            {/* Inyectar contenido dinamicamente */}
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
