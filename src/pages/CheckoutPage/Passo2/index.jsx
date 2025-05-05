import { useState } from "react";
import Resumo from "../Resumo";
import FormularioCartao from "./FormularioCartao";
import { toast } from "react-toastify";

export default function Passo2({
  cartao,
  currentStep,
  setCurrentStep,
  cvc,
  validade,
  handleCartaoChange,
  handleValidadeChange,
  handleCvcChange,
  clearCart,
  formData,
  setFormData,
}) {
  const camposPreenchidos =
    Object.values(formData).every((valor) => valor.trim() !== "") &&
    cartao.trim() !== "" &&
    validade.trim() !== "" &&
    cvc.trim() !== "";

  const [isProcessing, setIsProcessing] = useState(false);

  const notify = () =>
    toast("Por favor, preencha todos os campos antes de continuar!", {
      autoClose: 5000,
    });

  const handleContinuar = (e) => {
    e.preventDefault();
    if (isProcessing) return; // Previne múltiplos cliques enquanto processa

    setIsProcessing(true);

    if (camposPreenchidos) {
      setCurrentStep(currentStep + 1);
      setFormData({}); // Limpa os dados do formulário
      clearCart(); // Limpa o carrinho após o pagamento
    } else {
      notify(); // Chama o toast caso algum campo não esteja preenchido
    }

    setIsProcessing(false);
  };

  return (
    <section>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <div className="shadow-black/20 shadow-md p-4 rounded-xl bg-white lg:h-fit lg:sticky lg:top-0">
          <h2 className="font-playfair text-xl text-verde-escuro">
            Informações de Pagamento
          </h2>
          <FormularioCartao
            cartao={cartao}
            handleCartaoChange={handleCartaoChange}
            handleValidadeChange={handleValidadeChange}
            handleCvcChange={handleCvcChange}
            validade={validade}
            cvc={cvc}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            clearCart={clearCart}
            handleContinuar={handleContinuar}
            isProcessing={isProcessing}
            camposPreenchidos={camposPreenchidos}
          />
        </div>
        <Resumo />
      </div>
    </section>
  );
}
