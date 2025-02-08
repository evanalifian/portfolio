import { Link } from "react-router";
import DropdownMenu from "./DropdownMenu";
import { navigation } from "../constans/navigation";

export default function HeaderNav() {
  return (
    <header className="fixed top-0 z-10 w-full border-b border-b-zinc-300 bg-white">
      <div className="mx-auto flex h-9 w-full max-w-4xl items-center justify-between px-4">
        <Link to="/" className="font-medium ">
          evanalifian
        </Link>
        <DropdownMenu />
        <nav className="hidden space-x-6 md:block">
          {navigation.menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
