import { useContext, useEffect, useState } from "react";
import { LuArrowLeft, LuCheck, LuCreditCard, LuShield } from "react-icons/lu";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumbs";
import OrderResume from "../OrderResume";
import { CartContext } from "../../../context/CartContext";

export const CheckoutStep3 = ({ prevStep, currentStep }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { clearCart } = useContext(CartContext);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const breadcrumbs = [
    {
      id: 1,
      name: "Information",
      to: "/checkout",
      active: currentStep === 1,
    },
    {
      id: 2,
      name: "Shipping",
      to: "/checkout",
      active: currentStep === 2,
    },
    {
      id: 3,
      name: "Payment",
      to: "/checkout",
      active: currentStep === 3,
    },
  ];

  return (
    <div>
      {!orderPlaced ? (
        <>
          <Breadcrumb product={{ breadcrumbs }} currentStep={currentStep} />
          <h3 className="font-dm text-gray-800 text-lg mb-4 lg:mt-4">
            Payment Information
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:items-center lg:mb-16">
            <div>
              <div>
                <div className="flex items-center justify-between lg:mb-4">
                  <h4 className="font-dm text-lg text-gray-800">Credit Card</h4>
                  <p className="flex items-center gap-2">
                    Secure Payment{" "}
                    <LuShield className="text-green-500 w-5 h-5" />
                  </p>
                </div>
                <div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1">
                      <label htmlFor="name">Name on Card *</label>
                      <input
                        required
                        type="text"
                        className="border-1 border-gray-300 p-2 rounded-lg"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid grid-cols-1 relative">
                      <label htmlFor="cardNumber">Card Number *</label>
                      <input
                        required
                        type="text"
                        className="border-1 border-gray-300 p-2 rounded-lg ps-12"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19" // Limitar o número de caracteres
                      />
                      <LuCreditCard className="absolute top-9 left-3 w-5 h-5" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid grid-cols-1">
                        <label htmlFor="expiration">Expiration Date *</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          className="border-1 border-gray-300 p-2 rounded-lg ps-6"
                        />
                      </div>
                      <div className="grid grid-cols-1">
                        <label htmlFor="cvv">CVC/CVV *</label>
                        <input
                          type="password" // Mudar para "password" para esconder o CVV
                          required
                          placeholder="123"
                          className="border-1 border-gray-300 p-2 rounded-lg ps-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="save" className="flex gap-4">
                        <input type="checkbox" name="save" id="save" />
                        Save this card for future purchases
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 w-fit p-2 rounded-lg text-coral hover:bg-rose hover:text-white transition-all duration-300"
                >
                  <LuArrowLeft />
                  Previous Step
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-coral text-white px-6 py-3 rounded-lg mt-4 hover:bg-rose transition-all"
                >
                  Place Order
                </button>
              </div>
            </div>

            <OrderResume />
          </div>
        </>
      ) : (
        <div className="my-6 p-4 rounded-lg text-center shadow-md shadow-black/20 lg:max-w-200 lg:mx-auto lg:mb-16">
          <div className="bg-green-100 text-green-800 w-fit p-2 rounded-full mx-auto">
            <LuCheck className="w-12 h-12" />
          </div>
          <div>
            <h3 className="text-4xl font-dm text-gray-800 mt-4">
              Thank you for your order!
            </h3>
            <p className="mt-2 text-lg">
              Your order has been received and is being processed. You will
              receive a confirmation email shortly.
            </p>
          </div>
          <div className="flex items-center justify-center my-4 gap-2">
            <p className="font-bold">Order Reference:</p>
            <p className="text-coral font-bold">EH-478036</p>
          </div>
          <div className="my-10">
            <Link
              to="/products"
              className="bg-rose text-white py-3 px-6 cursor-pointer rounded-lg hover:bg-coral transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
