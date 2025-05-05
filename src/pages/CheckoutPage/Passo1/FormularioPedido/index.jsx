import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

export default function FormularioPedido() {
  const { formData, setFormData } = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 gap-4 ">
      <div>
        <label className="grid grid-cols-1" htmlFor="nome">
          Nome Completo *
          <input
            className="border-1 border-gray-300 p-3 rounded-lg"
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            value={formData.nome}
            required
            type="text"
            id="nome"
          />
        </label>
      </div>
      <div>
        <label className="grid grid-cols-1" htmlFor="email">
          Email *
          <input
            className="border-1 border-gray-300 p-3 rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            required
            type="email"
            id="email"
          />
        </label>
      </div>
      <div>
        <label className="grid grid-cols-1" htmlFor="telefone">
          Telefone *
          <input
            className="border-1 border-gray-300 p-3 rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
            value={formData.telefone}
            required
            type="number"
            id="telefone"
          />
        </label>
      </div>
      <div>
        <label className="grid grid-cols-1" htmlFor="cep">
          CEP *
          <input
            className="border-1 border-gray-300 p-3 rounded-lg"
            onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
            value={formData.cep}
            required
            type="text"
            id="cep"
          />
        </label>
      </div>
      <div>
        <label className="grid grid-cols-1" htmlFor="endereco">
          Endereço *
          <input
            className="border-1 border-gray-300 p-3 rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, endereco: e.target.value })
            }
            value={formData.endereco}
            required
            type="text"
            id="endereco"
          />
        </label>
      </div>
      <div>
        <label className="grid grid-cols-1" htmlFor="cidade">
          Cidade *
          <input
            className="border-1 border-gray-300 p-3 rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, cidade: e.target.value })
            }
            value={formData.cidade}
            required
            type="text"
            id="cidade"
          />
        </label>
      </div>
      <div>
        <label className="grid grid-cols-1" htmlFor="estado">
          Estado *
          <input
            className="border-1 border-gray-300 p-3 rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, estado: e.target.value })
            }
            value={formData.estado}
            required
            type="text"
            id="estado"
          />
        </label>
      </div>
    </div>
  );
}
