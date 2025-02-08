import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AlignJustify, X } from "lucide-react";
import { Link } from "react-router";
import { navigation } from "../constans/navigation";

export default function DropdownMenu() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className="outline-none md:hidden">
            {!open ? <AlignJustify size={18} /> : <X size={20} />}
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="w-28 space-y-1 z-20 rounded-md border border-zinc-300 bg-white p-1 outline-none"
          >
            {navigation.menus.map((menu) => (
              <MenuItem key={menu.path}>
                <Link
                  className="block rounded-sm px-2 py-0.5 text-sm font-medium text-gray-500 data-[focus]:bg-zinc-200 data-[focus]:text-gray-700"
                  to={menu.path}
                >
                  {menu.name}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
}
