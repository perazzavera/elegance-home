import produtos from "../../mocks/produtos.json";
import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import Filters from "./Filters";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useFavoritos } from "../../context/FavoritoContext";
import SortFilter from "./Filters/SortFilter";
import Product from "./Product";

const product = {
  breadcrumbs: [{ id: 1, name: "Home", to: "/" }],
  tag: "Products",
};

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

export default function Products() {
  const { favoritos, toggleFavorito } = useFavoritos();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <section className=" pb-16 px-4 lg:px-20">
        <Breadcrumb product={product} />
        <div className="flex items-baseline justify-between">
          <h2 className="font-dm text-3xl text-gray-800">All Products</h2>

          {/* FILTERS ICONS - FILTERS */}
          <div className="flex items-center">
            <SortFilter sortOptions={sortOptions} />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:flex lg:gap-10 ">
          <Filters
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          {/* PRODUTO */}
          <Product
            produtos={produtos}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        </div>
      </section>
    </>
  );
}
