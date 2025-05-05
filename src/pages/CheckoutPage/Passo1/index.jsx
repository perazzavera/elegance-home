import { useContext, useState } from "react";
import Resumo from "../Resumo";
import FormularioPedido from "./FormularioPedido";
import MetodoEnvio from "./MetodoEnvio";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../../../context/CartContext";

export default function Passo1({ currentStep, setCurrentStep, formatPrice }) {
  const { formData } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const camposPreenchidos = Object.values(formData).every(
    (valor) => valor.trim() !== ""
  );
  const freteSelecionado = formData.envio !== null && formData.envio !== "";
  const camposCompletos = camposPreenchidos && freteSelecionado;

  const notify = () =>
    toast(
      "Por favor, preencha todos os campos e escolha uma modalidade de frete antes de continuar !",
      {
        autoClose: 5000,
      }
    );

  const handleContinuar = (e) => {
    e.preventDefault();
    if (isProcessing) return; // Previne múltiplos cliques enquanto processa

    setIsProcessing(true);

    if (camposCompletos) {
      setCurrentStep(currentStep + 1);
    } else {
      notify(); // Chama o toast caso o formulário não esteja preenchido ou frete não selecionado
    }

    setIsProcessing(false);
  };

  return (
    <section>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <form className="shadow-md shadow-black/20 px-4 py-4 rounded-xl bg-white">
          <h2 className="font-dm text-xl text-gray-800 mb-6">
            Informações de Envio
          </h2>
          {/* Informações pessoais */}
          <FormularioPedido camposPreenchidos={camposPreenchidos} />

          {/* Método de envio */}
          <div className="pt-10">
            <h2 className="font-dm text-xl text-gray-800 mb-2">
              Método de Envio
            </h2>
            <MetodoEnvio />
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleContinuar}
                className={`bg-rose text-white p-3 rounded-lg hover:bg-coral transition-all duration-300 flex justify-center items-center w-fit text-center"
                  ${
                    !camposPreenchidos || isProcessing
                      ? "opacity-50 cursor-not-allowed pointer-events-none"
                      : "cursor-pointer"
                  }, 
                `}
              >
                Continuar para pagamento
              </button>
              <ToastContainer
                position="bottom-right"
                style={{ marginTop: "4rem" }}
              />
            </div>
          </div>
        </form>
        <Resumo formatPrice={formatPrice} />
      </div>
    </section>
  );
}
