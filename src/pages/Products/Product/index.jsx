import { Link } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import BotaoFavoritar from "./BotaoFavoritar";

export default function Product({ produtos, favoritos, toggleFavorito }) {
  const formatPrice = (price) => {
    return `$${Math.round(price)}`;
  };

  return (
    <div className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-3 lg:space-y-10">
      {produtos.map((produto) => {
        const ehNew = produto.new === true;
        return (
          <Link
            key={produto.id}
            to={`/products/${produto.category}/${produto.id}`}
            className="relative group transition-transform duration-700 hover:scale-105"
          >
            <div>
              <img
                className="rounded-t-3xl min-h-80 max-h-80 object-cover w-full "
                src={produto.srcPrincipal}
                alt={produto.alt}
              />
            </div>

            {/* BOTÃO FAVORITAR/DESFAVORITAR */}
            <BotaoFavoritar
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
              produto={produto}
            />

            {/* TAG NOVIDADE */}
            {ehNew && (
              <p className="absolute top-3 left-3 bg-dourado text-white py-1 px-2 rounded-lg">
                New
              </p>
            )}

            {/* DESCRIÇÕES PRODUTO */}
            <div className="p-4 rounded-b-3xl shadow-black/30 shadow-md">
              <div className="flex items-center gap-2">
                <RatingStars rating={produto.rating} />
                <p className="text-lg font-black text-gray-500">•</p>
                <p className="text-gray-500 font-medium">
                  {produto.reviews} reviews
                </p>
              </div>
              <h3 className="font-dm text-xl text-gray-800">{produto.title}</h3>
              <h5 className="text-rose font-semibold">
                {formatPrice(produto.price)}
              </h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
