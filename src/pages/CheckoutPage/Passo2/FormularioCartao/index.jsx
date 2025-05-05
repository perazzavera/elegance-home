import { ToastContainer } from "react-toastify";

export default function FormularioCartao({
  cartao,
  cvc,
  validade,
  handleCartaoChange,
  handleValidadeChange,
  handleCvcChange,
  isProcessing,
  camposPreenchidos,
  handleContinuar,
}) {
  return (
    <form className="grid grid-cols-1 gap-4 lg:my-10">
      <div>
        <label htmlFor="cartao" className="grid grid-cols-1 w-full">
          Número do Cartão *
          <input
            type="text"
            maxLength={19} // 16 dígitos + 3 espaços
            value={cartao}
            onChange={handleCartaoChange}
            className="border-1 border-gray-300 p-3 rounded-lg outline-0"
            placeholder="1234 5678 9012 3456"
          />
        </label>
      </div>
      <div>
        <label htmlFor="nome" className="grid grid-cols-1 w-full">
          Nome do Cartão *
          <input
            type="text"
            className="border-1 border-gray-300 p-3 rounded-lg outline-0"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex-1">
          <label htmlFor="validade" className="grid grid-cols-1 w-full">
            Validade *
          </label>
          <input
            id="validade"
            type="text"
            value={validade}
            onChange={handleValidadeChange}
            maxLength={5}
            placeholder="MM/AA"
            className="border-1 border-gray-300 p-3 rounded-lg w-full outline-0"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvc" className="grid grid-cols-1 w-full">
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            value={cvc}
            onChange={handleCvcChange}
            maxLength={4}
            placeholder="123"
            className="border-1 border-gray-300 p-3 outline-0 rounded-lg w-full"
          />
        </div>
      </div>
      <div className="flex justify-center h-full items-center mt-4">
        <button
          onClick={handleContinuar}
          className={`bg-rose text-white p-3 rounded-lg hover:bg-coral transition-all duration-300 flex justify-center items-center w-fit text-center cursor-pointers"
                  ${
                    !camposPreenchidos || isProcessing
                      ? "opacity-50 cursor-not-allowed pointer-events-none"
                      : ""
                  }, 
                `}
        >
          Finalizar Pedido
        </button>
        <ToastContainer
          position="bottom-right"
          style={{ marginTop: "4rem", zIndex: "100" }}
        />
      </div>
    </form>
  );
}
