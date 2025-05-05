import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Breadcrumb({ product }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center py-8 flex-wrap">
        {product.breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <Link
                to={breadcrumb.to}
                className="mr-2 text-sm font-medium text-gray-500 "
              >
                {breadcrumb.name}
              </Link>
              <LuChevronRight className="w-4 h-4 text-gray-900" />
            </div>
          </li>
        ))}
        <li className="text-sm">
          <span className="font-medium text-gray-900">{product.tag}</span>
        </li>
      </ol>
    </nav>
  );
}
