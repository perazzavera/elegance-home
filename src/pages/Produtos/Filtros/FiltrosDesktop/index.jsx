import { Link } from "react-router-dom";

export default function FiltrosDesktop({ subcategorias }) {
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categorias</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        {subcategorias.map((category) => (
          <li key={category.name}>
            <Link to={category.to}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </form>
  );
}
