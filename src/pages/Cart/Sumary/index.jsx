import { useContext } from "react";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export default function Summary() {
  const { subtotal, shipping, getTotal } = useContext(CartContext);

  const tax = subtotal * 0.1; // 10% de imposto
  const finalTotal = getTotal() + tax; // Total incluindo frete e imposto

  // Formata preço com 2 casas decimais (ex: $50.00)
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <div className="py-4 border-t-1 border-gray-400 lg:border-0">
      <h3 className="font-dm text-gray-800 text-lg mb-4">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="font-semibold text-gray-800">{formatPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p className="font-semibold text-gray-800">
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Tax (10%)</p>
          <p className="font-semibold text-gray-800">{formatPrice(tax)}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-lg border-t-1 border-gray-400 pt-4">
        <p className="font-dm text-gray-800">Total</p>
        <p className="text-coral font-semibold">{formatPrice(finalTotal)}</p>
      </div>

      <div className="my-4 pb-4 border-b-1 border-gray-400">
        <Link
          to="/checkout"
          className="flex items-center gap-2 w-full justify-center bg-rose text-white p-2 rounded-xl hover:bg-coral transition-all duration-300"
        >
          Proceed to checkout
          <LuArrowRight className="animate-bounce" />
        </Link>
      </div>

      <div>
        <h4 className="font-dm text-lg text-gray-800">Promo Code</h4>
        <div className="flex gap-4 pb-4 mb-6 border-b-1 border-gray-200">
          <input
            placeholder="Enter promo code"
            type="text"
            className="border-1 border-rose p-2 rounded-lg w-full placeholder:text-sm"
          />
          <button className="bg-rose text-white py-2 px-4 rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
