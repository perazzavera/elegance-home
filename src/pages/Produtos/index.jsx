"use client";
import produtos from "../../mocks/produtos.json";
import { useEffect, useState } from "react";
import FiltrosMobile from "./Filtros/FiltrosMobile";
import SortFilter from "./Filtros/SortFilter";
import FiltrosDesktop from "./Filtros/FiltrosDesktop";
import { useParams } from "react-router-dom";
import GridProdutos from "./GridProdutos";
import Breadcrumb from "../../components/Breadcrumbs";
import Paginacao from "./Paginacao";

const subcategorias = [
  { name: "Mesas", to: "/produtos/moveis/mesas" },
  { name: "Sofás", to: "/produtos/moveis/sofas" },
  { name: "Poltronas", to: "/produtos/moveis/poltronas" },
  { name: "Luminárias", to: "/produtos/iluminacao/luminarias" },
];

const nomesFormatados = {
  mesas: "Mesas",
  sofas: "Sofás",
  poltronas: "Poltronas",
  luminarias: "Luminárias",
  moveis: "Móveis",
  iluminacao: "Iluminação",
};

export default function Produtos() {
  const { category, subcategory } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [sortBy, setSortBy] = useState("");

  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 6;
  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const indiceFinal = paginaAtual * produtosPorPagina;

  const produtosFiltrados = produtos.filter((produto) => {
    const categoriaMatch = category
      ? produto.category.toLowerCase() === category.toLowerCase()
      : true;
    const subcategoriaMatch = subcategory
      ? produto.subcategory.toLowerCase() === subcategory.toLowerCase()
      : true;
    return categoriaMatch && subcategoriaMatch;
  });

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (sortBy === "precoAsc") return a.preco - b.preco;
    if (sortBy === "precoDesc") return b.preco - a.preco;
    if (sortBy === "maisRecentes") return new Date(b.data) - new Date(a.data);
    return 0;
  });

  const produtosVisiveis = produtosOrdenados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);
  const numerosPaginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  const product = {
    breadcrumbs: [
      { id: 1, name: "Home", to: "/" },
      { id: 2, name: "Produtos", to: "/produtos" },
      category && {
        id: 3,
        name: category && nomesFormatados[category.toLowerCase()],
        to: `/produtos/${category}`,
      },
    ].filter(Boolean),
    tag:
      (subcategory && nomesFormatados[subcategory.toLowerCase()]) ||
      "Todos os produtos",
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [paginaAtual]);

  return (
    <>
      <div className="bg-white px-4 lg:px-20">
        <Breadcrumb product={product} />

        <div>
          {/* OFF CANVAS FILTRO MOBILE */}
          <FiltrosMobile
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            subcategorias={subcategorias}
          />

          <main className="">
            {/* HEADER PAGINA */}
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-2">
              <h2 className="text-2xl font-dm font-medium text-gray-800">
                {product.tag}
              </h2>

              <SortFilter
                setMobileFiltersOpen={setMobileFiltersOpen}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            {/* FILTROS DESKTOP */}
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <FiltrosDesktop subcategorias={subcategorias} />

                {/* GRID DE PRODUTOS*/}
                <div className="lg:col-span-3">
                  <GridProdutos produtosVisiveis={produtosVisiveis} />

                  {/* PAGINAÇÃO*/}
                  <Paginacao
                    paginaAtual={paginaAtual}
                    setPaginaAtual={setPaginaAtual}
                    numerosPaginas={numerosPaginas}
                    totalPaginas={totalPaginas}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
