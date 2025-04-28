import React, { useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuShield } from "react-icons/lu";
import Formulario from "./Formulario";

export const Information = ({
  nextStep,
  currentStep,
  cart,
  subtotal,
  finalTotal,
  tax,
  shipping,
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

  const formatPrice = (price) => `$${Math.round(price)}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <>
      <div className="mb-10">
        <Breadcrumb product={{ breadcrumbs }} currentStep={currentStep} />
        <Formulario formData={formData} setFormData={setFormData} />

        {/* BOTÕES */}
        <div className="flex justify-between">
          <Link
            to="/products"
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

        <div className="py-4 mt-4 border-t-1 border-gray-300">
          <h3 className="font-dm text-gray-800 text-lg mb-4">Order Summary</h3>
          <div className="space-y-2">
            <ul className="my-6 space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-10 w-full">
                  <div className="">
                    <img
                      className="w-20 min-h-20 max-h-20 rounded-xl object-bottom object-cover"
                      src={item.srcPrincipal}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <h3 className="font-dm text-gray-800">{item.title}</h3>
                    <p className="font-bold text-rose text-xl">
                      {formatPrice(item.price)}
                    </p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-semibold text-gray-800">
                {formatPrice(subtotal)}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p className="font-semibold text-gray-800">
                {formatPrice(shipping)}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Tax</p>
              <p className="font-semibold text-gray-800">{formatPrice(tax)}</p>
            </div>
          </div>

          <div className="flex justify-between mt-4 text-lg border-t-1 border-gray-400 pt-4">
            <p className="font-dm text-gray-800">Total</p>
            <p className="text-coral font-semibold">
              {formatPrice(finalTotal)}
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="flex items-center gap-2 justify-center">
            <LuShield className="w-5 h-5 text-green-500" />
            Secure Checkout
          </p>
          <p className="text-sm">
            Your payment information is encrypted and secure.
          </p>
        </div>
      </div>
    </>
  );
};
