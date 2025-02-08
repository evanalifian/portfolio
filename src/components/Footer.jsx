import { Link } from "react-router";
import { navigation } from "../constans/navigation";
import { socials } from "../constans/contacts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-5 0 mt-auto border-t border-t-zinc-300 py-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 md:flex-row md:justify-between">
        <section>
          <span className="font-medium">cnsl.lg</span>
          <p className="text-sm">{year} built with 💓 by Evan Alifian.</p>
        </section>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-x-16">
          <section>
            <span className="text-sm font-medium">Navigate</span>
            <ul className="mt-1 space-y-1">
              {navigation.menus.map((menu) => (
                <li key={menu.path}>
                  <Link
                    to={menu.path}
                    className="block text-sm text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <span className="text-sm font-medium">Socials</span>
            <ul className="mt-1 space-y-1">
              {socials.map((social) => (
                <li key={social.name}>
                  <Link
                    to={social.url}
                    target="_blank"
                    className="block text-sm text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <span className="text-sm font-medium">More</span>
            <ul className="mt-1 space-y-1">
              {navigation.more.map((menu) => (
                <li key={menu.name}>
                  <Link
                    to={menu.url}
                    target="_blank"
                    className="block text-sm text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
