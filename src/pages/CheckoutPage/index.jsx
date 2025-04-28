import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Information } from "./Step1";
import { Shipping } from "./Step2";
import { CheckoutStep3 } from "./Step3";

const Checkout = () => {
  const [step, setStep] = useState(1); // Etapa do checkout
  const { cart, total } = useContext(CartContext); // Pegando os dados do carrinho
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    lastName: "",
    street: "",
    complement: "",
    state: "",
    zip: "",
    country: "United States",
    shippingMethod: "",
    orderNotes: "",
  });

  // Calculando o subtotal do pedido
  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = 10; // Placeholder para o valor do frete
  const tax = subtotal * 0.1; // 10% de imposto (exemplo)
  const finalTotal = subtotal + shipping + tax;

  // Função para avançar para a próxima etapa
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Função para voltar para a etapa anterior
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="checkout px-4 mt-4">
      <h2 className="text-3xl text-gray-800 font-dm">Checkout</h2>

      {step === 1 && (
        <Information
          currentStep={step}
          cart={cart}
          subtotal={subtotal}
          nextStep={nextStep}
          total={total}
          finalTotal={finalTotal}
          shipping={shipping}
          tax={tax}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 2 && (
        <Shipping
          prevStep={prevStep}
          nextStep={nextStep}
          currentStep={step}
          formData={formData}
          setFormData={setFormData}
          finalTotal={finalTotal}
        />
      )}

      {step === 3 && <CheckoutStep3 prevStep={prevStep} currentStep={step} />}
    </div>
  );
};

export default Checkout;
