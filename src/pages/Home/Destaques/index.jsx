import { Link } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import produtos from "../../../mocks/produtos.json";
import { useFavoritos } from "../../../context/FavoritoContext";

export default function Destaques() {
  const { favoritos, toggleFavorito } = useFavoritos();

  // Pegando apenas os 4 primeiros produtos
  const produtosDestaque = produtos.slice(0, 4);

  const formatPrice = (price) => {
    return `R$${price.toFixed(2).replace(".", ",")}`;
  };

  return (
    <section className="py-16 px-4 lg:px-20 bg-gray-100">
      <h2 className="font-dm text-4xl text-gray-800 text-center">
        Produtos em Destaque
      </h2>
      <p className="text-lg mb-4 text-center">
        Descubra nossas peças mais populares, selecionadas por seu design e
        qualidade excepcionais
      </p>

      {/* PRODUTO */}
      <div className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-4">
        {produtosDestaque.map((produto) => {
          const ehNew = produto.new === true;
          return (
            <Link
              key={produto.id}
              to={`/produtos/${produto.category.toLowerCase()}/${produto.subcategory.toLowerCase()}/${
                produto.id
              }`}
              className="relative group transition-transform duration-700 hover:scale-105"
            >
              <div>
                <img
                  className="rounded-t-3xl min-h-80 max-h-80 object-cover w-full "
                  src={produto.imagens[0]}
                  alt={produto.alt}
                />
              </div>

              {/* BOTÃO FAVORITAR/DESFAVORITAR */}
              <button
                className="absolute top-3 right-3 text-rose bg-coral/80 p-2 rounded-full cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorito(produto.id);
                }}
              >
                {favoritos.includes(produto.id) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 "
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                )}
              </button>

              {/* TAG NOVIDADE */}
              {ehNew && (
                <p className="absolute top-3 left-3 bg-dourado text-white py-1 px-2 rounded-lg">
                  Novo
                </p>
              )}

              {/* DESCRIÇÕES PRODUTO */}
              <div className="p-4 rounded-b-3xl shadow-black/30 shadow-md">
                <div className="flex items-center gap-2">
                  <RatingStars rating={produto.rating} />
                  <p className="text-lg font-black text-gray-500">•</p>
                  <p className="text-gray-500 font-medium">
                    {produto.reviews} avaliações
                  </p>
                </div>
                <h3 className="font-dm text-xl text-gray-800">
                  {produto.title}
                </h3>
                <h5 className="text-rose font-semibold">
                  {formatPrice(produto.price)}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>

      {/* BOTÃO VER TODOS OS PRODUTOS */}
      <div className="flex justify-center mt-8">
        <Link
          to="/produtos"
          className="px-6 py-3 bg-rose text-white hover:bg-coral rounded-lg transition-colors duration-300"
        >
          Ver todos os produtos
        </Link>
      </div>
    </section>
  );
}
