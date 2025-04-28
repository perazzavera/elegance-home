import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { LuSearch, LuShoppingBag, LuUser } from "react-icons/lu";
import SearchBar from "../SearchBar";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Living Room", to: "/living-room" },
  { name: "Bedroom", to: "/bedroom" },
  { name: "Dining", to: "/dining" },
  { name: "Decor", to: "/decor" },
  { name: "Collections", to: "/collections" },
];

export default function NavBar() {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="bg-gray-800 h-16 px-2 flex items-center justify-between lg:px-20 lg:h-20">
        {/* LOGO MARCA */}
        <div className="h-full flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              className="hidden lg:block h-15"
              src="/images/favicon.png"
              alt=""
            />
            <div className="flex items-baseline">
              <h1 className="text-3xl text-rose lg:text-4xl">ELEGANCE</h1>
              <p className="text-rose text-sm ">HOME</p>
            </div>
          </Link>
        </div>

        {/* NAVEGAÇÃO DESKTOP */}
        <div className="hidden lg:flex">
          <div className="flex mx-auto gap-4 items-center">
            {navigation.map((item) => {
              const paginaAtual = location.pathname === item.to;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`${
                    !paginaAtual
                      ? "text-rose hover:text-white hover:bg-gray-900 transition-all duration-300"
                      : "text-white bg-gray-900"
                  } rounded-xl px-3 py-2 `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* NAVEGAÇÃO MOBILE */}
        <div className="flex items-center">
          <div className="flex items-center lg:gap-4">
            <LuSearch
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-7 h-7 text-rose ps-2 cursor-pointer"
            />

            {/* PROFILE DROPDOWN */}
            <Menu as="div" className="relative ps-2 cursor-pointer">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-0 focus:outline-0">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <LuUser className="w-6 h-6 text-rose" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
            <div className="relative">
              <Link to="/cart ">
                <LuShoppingBag className="w-7 h-7 text-rose ps-2" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
          {/* MENU HAMBURGUER */}
          <div>
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-rose focus:outline-hidden focus:ring-inset lg:hidden">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-7 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-7 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* SEARCH OVERLAY */}
          {searchOpen && (
            <div className="absolute top-15 left-0 right-0 bg-gray-800 shadow-md p-4 text-rose animate-fade-up lg:px-20">
              <SearchBar onClose={() => setSearchOpen(false)} />
            </div>
          )}
        </div>
      </div>

      {/* NAVEGAÇÃO MOBILE - LINKS */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
          {navigation.map((item) => {
            const paginaAtual = location.pathname === item.to;
            return (
              <Link
                key={item.name}
                to={item.to}
                className={`${
                  !paginaAtual
                    ? "text-rose hover:text-white hover:bg-gray-900 transition-all duration-300"
                    : "text-white bg-gray-900"
                } rounded-xl px-3 py-2 `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
