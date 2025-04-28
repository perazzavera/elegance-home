import { useContext } from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import { CartContext } from "../../context/CartContext";
import Sumary from "./Sumary";
import { LuArrowLeft, LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const product = {
  breadcrumbs: [{ id: 1, name: "Home", to: "/" }],
  tag: "Cart",
};

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return "$0.00"; // Retorna um valor padrão caso o preço não seja válido
    }
    return `$${numericPrice.toFixed(2)}`;
  };
  return (
    <>
      <section className="px-4 lg:px-20">
        <Breadcrumb product={product} />
        <h2 className="font-dm text-4xl text-gray-800 lg:mt-4">
          Your Shopping Cart
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:items-center">
          <div className="col-span-2">
            {cart.length === 0 ? (
              <div className="flex justify-center items-center">
                <p className="font-dm text-2xl text-gray-800">
                  Your cart is empty! :({" "}
                </p>
              </div>
            ) : (
              <ul className="my-6 space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-10 w-full">
                    <div className="">
                      <img
                        className="w-30 min-h-30 max-h-30 rounded-xl object-bottom object-cover"
                        src={item.srcPrincipal}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full">
                      <h3 className="font-dm text-gray-800">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 border-1 border-gray-500 rounded-3xl w-fit py-2 px-4 ">
                          <button
                            className="cursor-pointer"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                          >
                            <LuMinus />
                          </button>
                          <span>{item.quantity}</span>
                          {/* Exibe a quantidade */}
                          <button
                            className="cursor-pointer"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.color,
                                item.quantity + 1
                              )
                            }
                          >
                            <LuPlus />
                          </button>
                        </div>
                        <span>
                          <p>{item.color}</p>
                        </span>
                        <div>
                          <LuTrash2
                            onClick={() => removeFromCart(item.id, item.color)}
                            className="w-8 h-8 text-coral cursor-pointer"
                          />
                        </div>
                      </div>
                      <p className="font-bold text-rose text-xl">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div>
              <Link
                to="/products"
                className="flex items-center gap-2 w-fit p-2 rounded-xl text-coral hover:bg-rose hover:text-white transition-all duration-300"
              >
                <LuArrowLeft className="animate-bounce" />
                Continue shopping
              </Link>
            </div>
          </div>
          <Sumary /> {/* Passando a quantidade total */}
        </div>
      </section>
    </>
  );
}
