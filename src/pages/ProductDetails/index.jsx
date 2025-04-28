import { useParams } from "react-router-dom";
import produtos from "../../mocks/produtos.json";
import Breadcrumb from "../../components/Breadcrumbs";
import { useContext, useState, useEffect } from "react";
import { useFavoritos } from "../../context/FavoritoContext";
import Color from "./Color";
import Quantity from "./Quantity";
import Item from "./Item";
import BotaoSave from "./BotaoSave";
import CartInfo from "./CartInfo";
import { CartContext } from "../../context/CartContext";

export default function ProductDetails() {
  const { addToCart, updateQuantity } = useContext(CartContext);
  const { favoritos, toggleFavorito } = useFavoritos();
  const [contador, setContador] = useState(0);
  const [imagemSelecionada, setImagemSelecionada] = useState("");
  const [corSelecionada, setCorSelecionada] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const params = useParams();
  const { id, category } = params;

  useEffect(() => {
    const produto = produtos.find(
      ({ id: produtoId }) => produtoId.toString() === id
    );
    setProdutoSelecionado(produto);
    if (produto) {
      setImagemSelecionada(produto.srcPrincipal); // Inicializa com a imagem principal
    }
  }, [id]);

  if (!produtoSelecionado) {
    return <p>Produto não encontrado.</p>;
  }

  const handleChangeCor = (cor) => {
    setCorSelecionada(cor);
  };

  const handleIncrement = () => {
    setContador(contador + 1);
    updateQuantity(contador + 1); // Passa a nova quantidade para o componente pai
  };

  const handleDecrement = () => {
    if (contador > 1) {
      setContador(contador - 1);
      updateQuantity(contador - 1); // Passa a nova quantidade para o componente pai
    }
  };

  const product = {
    breadcrumbs: [
      { id: 1, name: "Home", to: "/" },
      { id: 2, name: `${category}`, to: `/products/${category}` },
      {
        id: 3,
        name: `${produtoSelecionado.subcategory}`,
        to: `/products/${category}/${produtoSelecionado.subcategory}`,
      },
    ],
    tag: `${produtoSelecionado.title}`,
  };

  return (
    <>
      <section className="px-4 pb-10 bg-gray-100 lg:px-20">
        <Breadcrumb product={product} />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="lg:pt-10">
            {/* PRODUTO */}
            <Item
              imagemSelecionada={imagemSelecionada}
              setImagemSelecionada={setImagemSelecionada}
              produtoSelecionado={produtoSelecionado}
            />
          </div>
          <div>
            <div className="mt-4">
              <Color
                handleChangeCor={handleChangeCor}
                produtoSelecionado={produtoSelecionado}
                corSelecionada={corSelecionada}
              />
              <Quantity
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                contador={contador}
              />
            </div>
            {/* BOTÕES */}
            <div className="mt-4 space-y-4">
              <button
                onClick={() =>
                  addToCart(produtoSelecionado, contador, corSelecionada)
                } // Adiciona o produto com a quantidade ao carrinho
                className="bg-rose text-white py-3 px-6 text-lg font-medium rounded-lg w-full cursor-pointer"
              >
                Add to cart
              </button>
              <BotaoSave
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
                produtoSelecionado={produtoSelecionado}
              />
            </div>
            <CartInfo />
            <div>
              <h3 className="font-dm text-2xl text-gray-800">
                Product Details
              </h3>
              <div className="space-y-2">
                {produtoSelecionado.productDetails.map((item, index) => (
                  <span key={index} className="flex gap-2">
                    <p className="font-black">•</p>
                    <p>{item}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
