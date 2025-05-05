import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function CarrinhoVazio() {
  return (
    <div className="justify-center items-center p-6 text-center h-screen flex flex-col bg-gray-100">
      <div className="shadow-black/20 shadow-md rounded-xl py-6 bg-white lg:p-10">
        <div className="flex justify-center">
          <LuShoppingBag className="h-12 w-12 text-coral" />
        </div>
        <p className="font-playfair text-2xl my-2 text-coral">
          Seu carrinho está vazio! :(
        </p>
        <p>Parece que você ainda não adicionou produtos ao seu carrinho.</p>
        <div className="flex justify-center mt-4">
          <Link
            to="/produtos"
            className="bg-rose text-white py-2 px-4 rounded-lg"
          >
            Ver produtos
          </Link>
        </div>
      </div>
    </div>
  );
}
