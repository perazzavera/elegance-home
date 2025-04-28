import React, { useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuShield } from "react-icons/lu";
import Formulario from "./Formulario";
import OrderResume from "../OrderResume";

export const Information = ({
  nextStep,
  currentStep,
  formData,
  setFormData,
}) => {
  const breadcrumbs = [
    {
      id: 1,
      name: "Information",
      to: "/checkout/information",
      active: currentStep === 1, // Marca o item como ativo se for a etapa atual
    },
    {
      id: 2,
      name: "Shipping",
      to: "/checkout/shipping",
      active: currentStep === 2, // Marca o item como ativo se for a etapa atual
    },
    {
      id: 3,
      name: "Payment",
      to: "/checkout/payment",
      active: currentStep === 3, // Marca o item como ativo se for a etapa atual
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <>
      <div className="mb-10 lg:mb-16">
        <Breadcrumb product={{ breadcrumbs }} currentStep={currentStep} />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:mt-6 ">
          <div>
            <Formulario formData={formData} setFormData={setFormData} />

            {/* BOTÕES */}
            <div className="flex justify-between">
              <Link
                to="/cart"
                className="flex items-center gap-2 w-fit p-2 rounded-lg text-coral hover:bg-rose hover:text-white transition-all duration-300"
              >
                <LuArrowLeft className="animate-bounce" />
                Back to Cart
              </Link>
              <button
                className="bg-rose text-white py-3 px-6 rounded-lg hover:bg-coral transition-all duration-300"
                onClick={nextStep}
              >
                Continue
              </button>
            </div>
          </div>
          <OrderResume />
        </div>
      </div>
    </>
  );
};
