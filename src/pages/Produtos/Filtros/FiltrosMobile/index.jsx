import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function FiltrosMobile({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  subcategorias,
}) {
  return (
    <Dialog
      open={mobileFiltersOpen}
      onClose={setMobileFiltersOpen}
      className="relative z-40 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
        >
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <LuX aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Filters */}
          <form className="mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              {subcategorias.map((category) => (
                <li key={category.name}>
                  <Link to={category.to} className="block px-2 py-3">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
