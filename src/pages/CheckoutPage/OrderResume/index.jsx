import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { LuShield } from "react-icons/lu";

// Função para formatar o preço
const formatPrice = (price) => {
  const numericPrice = parseFloat(price);
  if (isNaN(numericPrice)) {
    return "$0.00"; // Retorna um valor padrão caso o preço não seja válido
  }
  return `$${numericPrice.toFixed(2)}`;
};

export default function OrderResume({ subtotal, total, tax, shipping }) {
  const { cart } = useContext(CartContext);

  return (
    <div className="py-4 mt-4 border-t-1 border-gray-300 lg:border-0 lg:shadow-md lg:shadow-black/20 lg:mt-0 lg:p-6 lg:rounded-2xl lg:h-fit lg:sticky lg:top-0">
      <h3 className="font-dm text-gray-800 text-lg mb-4">Order Summary</h3>
      <div className="space-y-2">
        {/* Lista de produtos no carrinho */}
        <ul className="my-6 space-y-4">
          {cart.map((item) => (
            <li key={`${item.id}-${item.color}`} className="flex gap-10 w-full">
              <div>
                <img
                  className="w-20 min-h-20 max-h-20 rounded-xl object-bottom object-cover"
                  src={item.srcPrincipal}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col justify-between w-full">
                <h3 className="font-dm text-gray-800">{item.title}</h3>
                <p className="font-bold text-rose text-xl">
                  {formatPrice(item.price)}
                </p>
                <div className="flex justify-between items-end">
                  <p className="text-sm">Qty: {item.quantity}</p>
                  {item.color && (
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Resumo de valores */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="font-semibold text-gray-800">{formatPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <div className="text-right">
            <p className="font-semibold text-gray-800">
              {shipping === 0 ? "Free" : formatPrice(shipping)}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Estimated Tax (10%)</p>
          <p className="font-semibold text-gray-800">{formatPrice(tax)}</p>
        </div>

        {/* Total */}
        <div className="flex justify-between mt-4 text-lg border-t-1 border-gray-400 pt-4">
          <p className="font-dm text-gray-800">Total</p>
          <p className="text-coral font-semibold">{formatPrice(total)}</p>
        </div>
      </div>

      {/* Selo de segurança */}
      <div className="text-center mt-6">
        <p className="flex items-center gap-2 justify-center">
          <LuShield className="w-5 h-5 text-green-500" />
          Secure Checkout
        </p>
        <p className="text-sm">
          Your payment information is encrypted and secure.
        </p>
      </div>
    </div>
  );
}
