import { useContext, useEffect, useState } from "react";
import Steps from "./Stepper";
import Passo1 from "./Passo1";
import Passo2 from "./Passo2";
import Passo3 from "./Passo3";
import { CartContext } from "../../context/CartContext";

const steps = ["Envio", "Pagamento", "Confirmação"];

export default function Checkout() {
  const { metodosEnvio, formData, setFormData, clearCart } =
    useContext(CartContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [cartao, setCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCartaoChange = (e) => {
    const valorDigitado = e.target.value;
    const somenteNumeros = valorDigitado.replace(/\D/g, "");
    const formatado = somenteNumeros.replace(/(.{4})/g, "$1 ").trim();
    setCartao(formatado);
  };

  const handleValidadeChange = (e) => {
    const valor = e.target.value.replace(/\D/g, "").slice(0, 4);
    let formatado = valor;
    if (valor.length > 2) {
      formatado = `${valor.slice(0, 2)}/${valor.slice(2)}`;
    }
    setValidade(formatado);
  };

  const handleCvcChange = (e) => {
    const valor = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvc(valor);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <section className="pt-16 px-4 lg:px-20 bg-bege">
      <Steps steps={steps} currentStep={currentStep} />
      <div>
        <div>
          {currentStep === 0 && (
            <Passo1
              formData={formData}
              setFormData={setFormData}
              metodosEnvio={metodosEnvio}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
        </div>
        <div>
          {currentStep === 1 && (
            <div>
              <Passo2
                cartao={cartao}
                setCartao={setCartao}
                handleCartaoChange={handleCartaoChange}
                handleValidadeChange={handleValidadeChange}
                handleCvcChange={handleCvcChange}
                validade={validade}
                cvc={cvc}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                clearCart={clearCart}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          )}
        </div>
        <div>
          {currentStep === 2 && (
            <div>
              <Passo3 clearCart={clearCart} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
