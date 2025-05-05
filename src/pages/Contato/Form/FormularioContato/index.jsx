import { useContext } from "react";
import { LuSend } from "react-icons/lu";
import { CartContext } from "../../../../context/CartContext";

export default function FormularioContato({ handleSubmit, cols }) {
  const { formData, setFormData } = useContext(CartContext);
  return (
    <div
      className={`mt-6 p-4 border-gray-800 lg:mt-0 lg:shadow-black/20 lg:shadow-md lg:rounded-xl lg:col-span-${cols}`}
    >
      <h3 className="font-dm text-xl text-gray-800 mb-4">Envie uma Mensagem</h3>
      <form className="grid grid-cols-1 gap-4">
        <div className="">
          <label htmlFor="nome" className="grid grid-cols-1 w-full text-sm">
            Nome Completo *
            <input
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              required
              type="text"
              placeholder="Seu nome"
              className="border-1 border-gray-300 p-3 rounded-lg mt-1"
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="nome" className="grid grid-cols-1 w-full text-sm">
            Email *
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              type="email"
              placeholder="Seu email"
              className="border-1 border-gray-300 p-3 rounded-lg mt-1"
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="nome" className="grid grid-cols-1 w-full text-sm">
            Assunto *
            <select
              value={formData.assunto}
              onChange={(e) =>
                setFormData({ ...formData, assunto: e.target.value })
              }
              required
              className="border-1 border-gray-300 p-3 rounded-lg mt-1"
            >
              <option value="">Selecione um assunto</option>
              <option value="Dúvida sobre produto">Dúvida sobre produto</option>
              <option value="Problema com pedido">Problema com pedido</option>
              <option value="Sugestão">Sugestão</option>
              <option value="Parceria">Parceria</option>
              <option value="Outro">Outro</option>
            </select>
          </label>
        </div>
        <div className="">
          <label htmlFor="nome" className="grid grid-cols-1 w-full text-sm">
            Mensagem *
            <textarea
              value={formData.mensagem}
              onChange={(e) =>
                setFormData({ ...formData, mensagem: e.target.value })
              }
              required
              placeholder="Como podemos ajudar?"
              className="border-1 border-gray-300 p-3 rounded-lg mt-1 h-40"
            />
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-gray-800 text-rose justify-center p-3 rounded-lg"
        >
          <LuSend className="w-6 h-6" />
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
