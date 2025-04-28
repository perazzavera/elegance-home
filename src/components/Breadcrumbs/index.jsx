import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Breadcrumb({ product, currentStep }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap pt-6 pb-6 lg:border-b-1 border-gray-800/20">
        {product.breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id} className="flex items-center">
            <Link
              to={breadcrumb.to}
              className={`mr-2 text-sm font-medium ${
                breadcrumb.active ? "text-gray-800 font-bold" : "text-gray-500"
              }`}
            >
              {breadcrumb.name}
            </Link>
            {breadcrumb.id < product.breadcrumbs.length && (
              <LuChevronRight className="w-4 h-4 text-gray-900" />
            )}
          </li>
        ))}
        <li className="text-sm">
          <span className="font-medium text-gray-900 flex items-center gap-1">
            <LuChevronRight className="w-4 h-4" /> {product.tag}
          </span>
        </li>
      </ol>
    </nav>
  );
}
