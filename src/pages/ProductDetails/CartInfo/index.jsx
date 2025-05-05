import { LuRefreshCw, LuShield, LuTruck } from "react-icons/lu";

export default function CartInfo() {
  return (
    <div className="my-4 py-4 border-t-1 border-gray-300 space-y-3">
      <div className="flex items-center gap-2">
        <LuTruck className="w-6 h-6 text-rose" />
        <p>Frete grátis acima de R$150,00</p>
      </div>
      <div className="flex items-center gap-2">
        <LuShield className="w-6 h-6 text-rose" />
        <p>Garantia de 1 ano</p>
      </div>
      <div className="flex items-center gap-2">
        <LuRefreshCw className="w-6 h-6 text-rose" />
        <p>Devoluções em até 30 dias</p>
      </div>
    </div>
  );
}
