import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";

export default function ListaItens({
  cart,
  updateQuantity,
  removeFromCart,
  formatPrice,
}) {
  return (
    <ul className="my-6 space-y-4">
      {cart.map((item) => (
        <li
          key={item.id}
          className="flex gap-6 w-full px-4 bg-gray-100 p-4 rounded-xl relative shadow-md shadow-black/20"
        >
          <div className="">
            <img
              className="w-30 min-h-30 max-h-30 rounded-xl object-bottom object-cover"
              src={item.imagens[0]}
              alt={item.title}
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <h3 className="font-dm text-verde-escuro">{item.title}</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 border-1 border-gray-500 rounded-3xl w-fit py-2 px-4 ">
                <button
                  className="cursor-pointer text-verde-escuro"
                  onClick={() =>
                    updateQuantity(item.id, item.color, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  <LuMinus />
                </button>
                <span className="text-verde-escuro">{item.quantity}</span>
                {/* Exibe a quantidade */}
                <button
                  className="cursor-pointer text-verde-escuro"
                  onClick={() =>
                    updateQuantity(item.id, item.color, item.quantity + 1)
                  }
                >
                  <LuPlus />
                </button>
              </div>
              <div className="absolute right-2 bottom-4">
                <LuTrash2
                  onClick={() => removeFromCart(item.id)}
                  className="w-8 h-8 text-rose cursor-pointer"
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
  );
}
