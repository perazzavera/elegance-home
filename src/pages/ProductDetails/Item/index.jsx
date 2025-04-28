import RatingStars from "../../../components/RatingStars";

export default function Item({
  imagemSelecionada,
  produtoSelecionado,
  setImagemSelecionada,
}) {
  const formatPrice = (price) => {
    return `$${Math.round(price)}`;
  };

  return (
    <div>
      <div className="flex">
        <img
          className="rounded-3xl min-h-100 max-h-100 object-cover w-full object-bottom"
          src={imagemSelecionada || produtoSelecionado.srcPrincipal}
          alt={produtoSelecionado.alt}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        <img
          className="rounded-xl cursor-pointer h-35 w-full"
          src={produtoSelecionado.srcPrincipal}
          alt={produtoSelecionado.alt}
          onClick={() => setImagemSelecionada("")}
        />
        {produtoSelecionado.srcVariacoes.map((item) => (
          <img
            onClick={() => setImagemSelecionada(item.src)}
            className="rounded-xl cursor-pointer h-35 w-full"
            src={item.src}
            alt={produtoSelecionado.alt}
          />
        ))}
      </div>
      <div>
        <h2 className="font-dm text-2xl text-gray-800">
          {produtoSelecionado.title}
        </h2>
        <div className="flex gap-2 items-center my-2">
          <RatingStars rating={produtoSelecionado.rating} />|
          <p>{produtoSelecionado.reviews} reviews</p>
        </div>
        <p className="text-xl font-medium text-rose">
          {formatPrice(produtoSelecionado.price)}
        </p>
        <p className="pt-2">{produtoSelecionado.description}</p>
      </div>
    </div>
  );
}
