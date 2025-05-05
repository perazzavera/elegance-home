import { HeartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState();
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 px-4 lg:px-20 text-center">
      <h2 className="font-dm text-4xl text-gray-800">
        Junte-se à Nossa Comunidade
      </h2>
      <p className="text-lg my-4">
        Assine nossa newsletter para ofertas exclusivas, dicas de design de
        interiores e acesso antecipado às novas coleções.
      </p>
      {!subscribed ? (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-2 lg:flex gap-4 max-w-2xl mx-auto items-center lg:space-y-0"
        >
          <input
            placeholder="Seu email"
            className="block border-2 border-rose p-3 w-full rounded-lg  focus:outline-0 focus:ring-1 focus:ring-coral focus:ring-offset-1 lg:w-120"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-rose text-white py-3 px-6 w-full rounded-lg text-lg hover:bg-coral transition-all duration-300 lg:w-fit"
          >
            Inscreva-se
          </button>
        </form>
      ) : (
        <div className="bg-gray-800/80 text-rose font-dm text-xl text-center p-4 rounded-xl animate-fade-up my-8 lg:max-w-2xl lg:mx-auto">
          <p>Obrigado por se inscrever! Entraremos em contato em breve!</p>
          <HeartIcon className="w-8 h-8 mx-auto" />
        </div>
      )}
      <p className="text-sm text-gray-400 text-center mt-4">
        Ao se inscrever, você concorda com nossa Política de Privacidade e
        consente em receber atualizações da nossa empresa.
      </p>
    </section>
  );
}
