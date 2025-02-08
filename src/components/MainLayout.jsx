import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <HeaderNav />
      <main>
        <div className="mx-auto w-full max-w-4xl px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
