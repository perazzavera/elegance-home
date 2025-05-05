import { Link } from "react-router-dom";
import { LuHouse } from "react-icons/lu";

export default function Passo3() {
  return (
    <section className="py-10">
      <div className=" p-4 rounded-lg bg-green-100 text-green-800 border border-green-300 text-center">
        🎉 Seu pedido foi confirmado com sucesso! Em breve você receberá um
        email com os detalhes.
      </div>
      <div className="flex justify-center my-6">
        <Link
          to="/"
          className="flex items-center gap-2 bg-rose text-white py-3 px-6 rounded-xl hover:bg-coral transition-all duration-300"
        >
          <LuHouse className="w-5 h-5" /> Voltar ao Início
        </Link>
      </div>
    </section>
  );
}
