import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LuChevronDown, LuFilter } from "react-icons/lu";

const sortOptions = [
  { name: "Menor preço", value: "precoAsc" },
  { name: "Maior preço", value: "precoDesc" },
  { name: "Mais recentes", value: "maisRecentes" },
];

export default function SortFilter({
  setMobileFiltersOpen,
  setSortBy,
  sortBy,
}) {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
            Filtrar
            <LuChevronDown
              aria-hidden="true"
              className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
            />
          </MenuButton>
        </div>

        <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
          <div className="py-1">
            {sortOptions.map((option) => (
              <MenuItem key={option.value}>
                {({ active }) => (
                  <button
                    onClick={() => setSortBy(option.value)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      sortBy === option.value
                        ? "font-medium text-gray-900"
                        : "text-gray-500"
                    } ${active ? "bg-gray-100" : ""}`}
                  >
                    {option.name}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      <button
        type="button"
        onClick={() => setMobileFiltersOpen(true)}
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
      >
        <span className="sr-only">Filters</span>
        <LuFilter aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}
