import React, { useState } from "react";
import { Information } from "./Step1";
import { Shipping } from "./Step2";
import { CheckoutStep3 } from "./Step3";

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
    shippingMethod: "",
    orderNotes: "",
  });

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
        />
      )}

      {step === 2 && (
        <Shipping
          prevStep={prevStep}
          nextStep={nextStep}
          currentStep={step}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 3 && <CheckoutStep3 prevStep={prevStep} currentStep={step} />}
    </div>
  );
};

export default Checkout;
