import { LuRefreshCw, LuShield, LuTruck } from "react-icons/lu";

export default function CartInfo() {
  return (
    <div className="my-4 py-4 border-t-1 border-b-1 border-gray-300 space-y-3">
      <div className="flex items-center gap-2">
        <LuTruck className="w-6 h-6 text-rose" />
        <p>Free shipping over $150</p>
      </div>
      <div className="flex items-center gap-2">
        <LuShield className="w-6 h-6 text-rose" />
        <p>1-year warranty</p>
      </div>
      <div className="flex items-center gap-2">
        <LuRefreshCw className="w-6 h-6 text-rose" />
        <p>30-day returns</p>
      </div>
    </div>
  );
}
