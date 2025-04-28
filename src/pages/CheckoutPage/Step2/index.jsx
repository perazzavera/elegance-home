import { LuArrowLeft } from "react-icons/lu";
import Breadcrumb from "../../../components/Breadcrumbs";
import { useEffect } from "react";
import OrderResume from "../OrderResume";

export const Shipping = ({
  prevStep,
  nextStep,
  currentStep,
  formData,
  setFormData,
  total,
  subtotal,
  tax,
  shipping,
  shippingMethods,
}) => {
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };

  // Breadcrumbs para navegação
  const breadcrumbs = [
    {
      id: 1,
      name: "Information",
      to: "/checkout/information",
      active: currentStep === 1,
    },
    {
      id: 2,
      name: "Shipping",
      to: "/checkout/shipping",
      active: currentStep === 2,
    },
    {
      id: 3,
      name: "Payment",
      to: "/checkout/payment",
      active: currentStep === 3,
    },
  ];

  useEffect(() => {
    // Sempre rola para o topo quando a etapa muda
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <div className="space-y-8">
      <Breadcrumb product={{ breadcrumbs }} currentStep={currentStep} />

      <h3 className="font-dm text-gray-800 text-lg mb-4">Shipping Method</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:mb-16">
        <div>
          <div className="space-y-4">
            {shippingMethods.map((method) => (
              <div
                key={method.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  formData.shippingMethod === method.id
                    ? "border-1 border-coral bg-rose/10"
                    : "border-gray-300"
                }`}
                onClick={() =>
                  setFormData({ ...formData, shippingMethod: method.id })
                }
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={`shipping-${method.id}`}
                    name="shippingMethod"
                    value={method.id}
                    checked={formData.shippingMethod === method.id}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <label
                    htmlFor={`shipping-${method.id}`}
                    className="flex-grow cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-dm text-lg text-gray-800 block">
                          {method.name}
                        </span>
                        <span className="text-sm text-gray-800">
                          Estimated delivery: {method.days} business days
                        </span>
                        {method.minOrder && (
                          <span className="text-sm text-coral block">
                            {subtotal >= method.minOrder
                              ? "Free shipping applied!"
                              : `Free for orders over $${method.minOrder}`}
                          </span>
                        )}
                      </div>
                      <span className="font-medium text-gray-800">
                        {method.price === 0
                          ? "FREE"
                          : `$${method.price.toFixed(2)}`}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Campo de notas do pedido */}
          <div className="lg:my-6">
            <h4>Order Notes (optional)</h4>
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, orderNotes: e.target.value })
              }
              value={formData.orderNotes}
              name="orderNotes"
              id="orderNotes"
              className="h-30 border-1 w-full border-gray-300 rounded-lg p-4"
              placeholder="Special instructions for delivery or any other notes"
            ></textarea>
          </div>

          {/* Botões de navegação */}
          <div className="flex justify-between mb-8">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 w-fit p-2 rounded-lg text-coral hover:bg-rose hover:text-white transition-all duration-300"
            >
              <LuArrowLeft />
              Previous Step
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.shippingMethod}
              className="bg-rose text-white py-3 px-6 rounded-lg hover:bg-coral transition-all duration-300"
            >
              Continue
            </button>
          </div>
        </div>

        {/* Resumo do pedido */}
        <OrderResume
          tax={tax}
          subtotal={subtotal}
          total={total}
          shipping={shipping}
        />
      </div>
    </div>
  );
};
