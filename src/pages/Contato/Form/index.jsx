import { useState } from "react";
import { LuSend } from "react-icons/lu";
import FormularioContato from "./FormularioContato";

export default function Form({ setFormData, cols }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData("");
  };

  return (
    <>
      {!isSubmitted ? (
        <FormularioContato cols={cols} handleSubmit={handleSubmit} />
      ) : (
        <div className="my-16 bg-gray-800/20 grid grid-cols-1 items-center shadow-black/20 shadow-md py-6 rounded-xl lg:my-auto lg:h-full lg:col-span-2">
          <div>
            <div className="bg-gray-800 text-rose w-fit p-3 rounded-full mx-auto">
              <LuSend className="w-8 h-8" />
            </div>
            <h5 className="text-center font-dm text-2xl text-verde-escuro">
              Mensagem Enviada!
            </h5>
            <p className="text-center text-gray-500">
              Obrigado por entrar em contato. Responderemos em breve.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
