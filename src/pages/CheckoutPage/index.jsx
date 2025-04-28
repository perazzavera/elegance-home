import React, { useContext, useState } from "react";
import { Information } from "./Step1";
import { Shipping } from "./Step2";
import { CheckoutStep3 } from "./Step3";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const [step, setStep] = useState(1); // Etapa do checkout
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    lastName: "",
    street: "",
    complement: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    shippingMethod: "standart",
    orderNotes: "",
  });

  const shippingMethods = [
    { id: "standard", name: "Standard Shipping", price: 15, days: "3-5" },
    { id: "express", name: "Express Shipping", price: 25, days: "1-2" },
    { id: "free", name: "Free Shipping", price: 0, days: "5-7", minOrder: 150 },
  ];

  const { getCartTotal } = useContext(CartContext);

  const subtotal = getCartTotal();
  const shipping =
    formData.shippingMethod === "free" && subtotal >= 150
      ? 0
      : shippingMethods.find((m) => m.id === formData.shippingMethod)?.price ||
        0;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

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
    <div className="checkout px-4 mt-4 lg:px-20">
      <h2 className="text-3xl text-gray-800 font-dm">Checkout</h2>

      {step === 1 && (
        <Information
          currentStep={step}
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
          total={total}
          subtotal={subtotal}
          tax={tax}
          shipping={shipping}
        />
      )}

      {step === 2 && (
        <Shipping
          prevStep={prevStep}
          nextStep={nextStep}
          currentStep={step}
          formData={formData}
          setFormData={setFormData}
          total={total}
          subtotal={subtotal}
          tax={tax}
          shipping={shipping}
          shippingMethods={shippingMethods}
        />
      )}

      {step === 3 && (
        <CheckoutStep3
          prevStep={prevStep}
          currentStep={step}
          total={total}
          subtotal={subtotal}
          tax={tax}
          shipping={shipping}
        />
      )}
    </div>
  );
};

export default Checkout;
