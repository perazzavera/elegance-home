import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export default function Sumario() {
  const navigate = useNavigate();
  const { getCartTotal, metodosEnvio, formData, cart, formatPrice } =
    useContext(CartContext);
  const subtotal = getCartTotal();
  const frete = Number(
    metodosEnvio.find((item) => item.label === formData.envio)?.valor || 0
  );

  const total = subtotal + frete;

  return (
    <div className="py-4 shadow-md shadow-black/20 p-4 rounded-xl bg-white lg:sticky lg:top-0">
      <h3 className="font-dm text-gray-800 text-xl mb-4">Resumo da compra</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-semibold text-coral">{formatPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Frete</p>
          <p className="font-semibold text-coral">{formatPrice(frete)}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-lg border-t-1 border-gray-400 pt-4">
        <p className="font-semibold text-coral">Total</p>
        <p className="text-coral font-semibold">{formatPrice(total)}</p>
      </div>

      <div className="grid grid-cols-2 w-fit mx-auto gap-4 mt-8">
        <button
          className="bg-rose text-white rounded-lg hover:bg-coral transition-all duration-300 py-3 px-6"
          onClick={() => {
            navigate(-1);
          }}
        >
          Continuar Comprando
        </button>
        <Link
          to={cart.length === 0 ? "#" : "/checkout"}
          className={` flex items-center bg-rose text-white justify-center py-3 px-6 rounded-lg hover:bg-coral transition-all duration-300 ${
            cart.length === 0
              ? "cursor-not-allowed opacity-50 pointer-events-none"
              : ""
          }`}
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}
