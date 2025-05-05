import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function NovaColecao() {
  return (
    <section className=" bg-gray-100 py-16 px-4 lg:px-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        <div>
          <h2 className="font-dm text-5xl text-gray-800 lg:text-6xl">
            Outono/Inverno 2024
          </h2>
          <p className="text-lg my-4 lg:text-2xl lg:my-6">
            Experimente o aconchego e a sofisticação da nossa coleção sazonal.
            Projetada para transformar seu ambiente com elegância e conforto.
          </p>
          <Link
            to="/collections"
            className="flex items-center text-xl font-dm text-rose w-fit hover:text-coral transition-all duration-300 lg:text-2xl"
          >
            Conheça nossa coleção
            <LuChevronRight className="w-6 h-6 lg:w-7 lg:h-7 animate-pulse" />
          </Link>
        </div>
        <div className="mt-4 rounded-2xl shadow-lg shadow-black/50">
          <img className="rounded-2xl" src="/images/collection.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
