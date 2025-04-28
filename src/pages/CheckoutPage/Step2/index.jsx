import { LuArrowLeft, LuShield } from "react-icons/lu";
import Breadcrumb from "../../../components/Breadcrumbs";
import { useContext, useEffect } from "react";
import OrderResume from "../OrderResume";
import { CartContext } from "../../../context/CartContext";

const formatPrice = (price) => `$${Math.round(price)}`;

export const Shipping = ({
  prevStep,
  nextStep,
  currentStep,
  formData,
  setFormData,
}) => {
  const { setShippingMethod, subtotal } = useContext(CartContext);

  // Métodos de envio disponíveis (frete grátis só aparece se subtotal >= 150)
  const shippingMethods = [
    {
      id: "standard",
      name: "Standard Shipping",
      price: 15,
      days: "3-5",
    },
    {
      id: "express",
      name: "Express Shipping",
      price: 25,
      days: "1-2",
    },
    ...(subtotal >= 150
      ? [
          {
            id: "free",
            name: "Free Shipping",
            price: 0,
            days: "5-7",
            info: "Free shipping applied!",
          },
        ]
      : []),
  ];

  // Atualiza o frete no formData E no contexto
  const handleShippingChange = (selectedMethodId) => {
    // Atualiza tanto o formData quanto o contexto
    setFormData({
      ...formData,
      shippingMethod: selectedMethodId,
    });
    setShippingMethod(selectedMethodId); // Isso vai disparar a atualização no OrderResume
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
          <div className="grid grid-cols-1 gap-4">
            {shippingMethods.map((item) => (
              <label
                key={item.id}
                className={`flex items-center gap-4 py-4 px-8 border-2 rounded-xl cursor-pointer ${
                  formData.shippingMethod === item.id
                    ? "border-coral bg-rose/10"
                    : "border-gray-300"
                }`}
                htmlFor={item.id}
              >
                <input
                  type="radio"
                  name="shippingMethod"
                  id={item.id}
                  value={item.id}
                  checked={formData.shippingMethod === item.id}
                  onChange={() => handleShippingChange(item.id)}
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    Estimated delivery: {item.days} days
                  </p>
                  <p className="text-sm">{formatPrice(item.price)}</p>
                  <p className="text-coral font-medium">{item.info}</p>
                </div>
              </label>
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
        <OrderResume />
      </div>
    </div>
  );
};
