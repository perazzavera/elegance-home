import { Link } from "react-router-dom";

export default function ServicosDesign() {
  return (
    <section className="py-16 px-4 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:px-20 lg:items-center">
      <div className="order-2 text-center">
        <h2 className="font-dm text-4xl text-gray-800 mt-6 lg:mt-0">
          Serviços de Design de Interiores
        </h2>
        <p className="text-lg mt-4 mb-8">
          Transforme sua casa com nossos serviços profissionais de design de
          interiores. Nossos especialistas trabalharão com você para criar um
          espaço que reflita seu estilo pessoal.
        </p>

        <Link
          to="/contato"
          className="bg-rose text-white font-medium text-lg py-3 px-6 rounded-xl hover:bg-coral transition-all duration-300"
        >
          Solicite um orçamento
        </Link>
      </div>
      <div className="mt-6 lg:mt-0 lg:mx-auto">
        <img
          className="rounded-4xl shadow-md shadow-black/30 lg:h-150"
          src="/images/design.jpeg"
          alt="imagem de uma sala de estar com cores neutras um sofás e duas poltronas com uma mesinha de centro"
        />
      </div>
    </section>
  );
}
