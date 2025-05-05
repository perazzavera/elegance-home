import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

export default function MetodoEnvio() {
  const { metodosEnvio, formData, setFormData, formatPrice } =
    useContext(CartContext);
  return (
    <div className="grid grid-cols-1 gap-4">
      {metodosEnvio.map((metodo, index) => (
        <label
          key={index}
          className="flex items-center gap-4 border-1 border-gray-300 p-4 rounded-xl cursor-pointer"
        >
          <input
            type="radio"
            name="metodoEnvio"
            value={metodo.label}
            checked={formData.envio === metodo.label}
            onChange={(e) =>
              setFormData({ ...formData, envio: e.target.value })
            }
            className="border-1 border-coral p-3 rounded-lg"
          />
          <div>
            <h3>{metodo.label}</h3>
            <p>
              {metodo.dias} - {formatPrice(metodo.valor)}
            </p>
          </div>
        </label>
      ))}
    </div>
  );
}
