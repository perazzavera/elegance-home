import { LuMinus, LuPlus } from "react-icons/lu";

export default function Quantity({
  handleDecrement,
  handleIncrement,
  contador,
}) {
  return (
    <div className="mx-auto">
      <h3 className="font-dm text-xl text-gray-800 text-center">Quantidade</h3>
      <div className="flex mt-2 items-center gap-4 bg-white w-fit p-3 rounded-lg border-1 lg:mt-6">
        <button onClick={handleDecrement} className="cursor-pointer">
          <LuMinus className="h-6 w-6" />
        </button>
        <span className="border-l-1 border-r-1 px-4 text-lg font-medium">
          {contador}
        </span>
        <button onClick={handleIncrement} className="cursor-pointer">
          <LuPlus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
