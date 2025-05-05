import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Paginacao({
  paginaAtual,
  setPaginaAtual,
  numerosPaginas,
  totalPaginas,
}) {
  return (
    <div className="flex justify-center mt-16 gap-4 lg:gap-50 items-center">
      <button
        onClick={() => {
          if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
          }
        }}
        className="text-white bg-rose rounded-full p-1"
      >
        <LuChevronLeft className="w-10 h-10 pe-1" />
      </button>
      <div className="flex justify-center gap-2 items-center">
        {numerosPaginas.map((numero) => (
          <button
            key={numero}
            onClick={() => setPaginaAtual(numero)}
            className={`py-3 px-5 rounded-full text-xl font-montserrat ${
              numero === paginaAtual
                ? "bg-coral text-white"
                : "bg-rose text-white"
            }`}
          >
            {numero}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1);
          }
        }}
        className="text-white bg-rose rounded-full p-1"
      >
        <LuChevronRight className="w-10 h-10 ps-1" />
      </button>
    </div>
  );
}
