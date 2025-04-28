import produtos from "../../mocks/produtos.json";
import { useState, useMemo, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import Filters from "./Filters";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useFavoritos } from "../../context/FavoritoContext";
import SortFilter from "./Filters/SortFilter";
import Product from "./Product";
import { useParams } from "react-router-dom"; // Importando useParams

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
  const [filters, setFilters] = useState({
    categories: [], // Filtros de categoria
    options: {}, // Filtros de opções adicionais
    sortOption: "Most Popular", // Valor padrão de ordenação
  });
  const [isLoading, setIsLoading] = useState(false);

  // Usando useParams para obter categoria e subcategoria da URL
  const { category, subcategory } = useParams();

  // Função para aplicar os filtros
  const filteredProducts = useMemo(() => {
    let products = produtos.filter((produto) => {
      // Filtra pela categoria
      const categoryMatch = category
        ? produto.category.toLowerCase() === category.toLowerCase()
        : true;
      // Filtra pela subcategoria, se presente
      const subcategoryMatch = subcategory
        ? produto.subcategory?.toLowerCase() === subcategory.toLowerCase()
        : true;

      // Filtra pelas opções (ex: cor, tamanho, etc.)
      const optionsMatch = Object.entries(filters.options).every(
        ([key, values]) => {
          return values.every((value) => produto[key]?.includes(value));
        }
      );

      return categoryMatch && subcategoryMatch && optionsMatch;
    });

    // Ordenar produtos com base na opção de ordenação
    if (filters.sortOption) {
      switch (filters.sortOption) {
        case "Most Popular":
          products.sort((a, b) => b.popularity - a.popularity);
          break;
        case "Best Rating":
          products.sort((a, b) => b.rating - a.rating);
          break;
        case "Newest":
          products.sort(
            (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
          );
          break;
        case "Price: Low to High":
          products.sort((a, b) => a.price - b.price);
          break;
        case "Price: High to Low":
          products.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
    }

    return products;
  }, [category, subcategory, filters]); // Refiltra sempre que a categoria, subcategoria ou filtros mudam

  // Atualize o estado isLoading enquanto os filtros estão sendo aplicados
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false); // Simula o carregamento dos filtros
    }, 500); // Tempo para simular o carregamento dos filtros
  }, [filters]); // Isso acontece sempre que os filtros mudam

  // Função para atualizar o filtro de ordenação
  const handleSortChange = (option) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortOption: option,
    }));
  };

  return (
    <>
      <section className="pb-16 px-4 lg:px-20">
        <Breadcrumb product={product} />
        <div className="flex items-baseline justify-between">
          <h2 className="font-dm text-3xl text-gray-800">
            {category} {subcategory && `> ${subcategory}`}
          </h2>

          {/* ICONES DE FILTROS */}
          <div className="flex items-center">
            <SortFilter
              sortOptions={sortOptions}
              handleSortChange={handleSortChange}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filtros</span>
              <FunnelIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:flex lg:gap-10 ">
          <Filters
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            filters={filters}
            setFilters={setFilters} // Passa a função que altera os filtros
          />

          {/* PRODUTOS */}
          {isLoading ? (
            <div>Carregando produtos...</div> // Feedback de carregamento
          ) : (
            <Product
              produtos={filteredProducts} // Passa os produtos filtrados
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
            />
          )}
        </div>
      </section>
    </>
  );
}
