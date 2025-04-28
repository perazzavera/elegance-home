import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function DesktopFilter({
  subCategories,
  filters,
  onFilterChange,
}) {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    options: {},
  });

  // Atualiza os filtros selecionados
  const handleFilterChange = (sectionId, optionValue) => {
    const newFilters = { ...selectedFilters };

    if (sectionId === "categories") {
      // Adiciona ou remove a categoria selecionada
      if (newFilters.categories.includes(optionValue)) {
        newFilters.categories = newFilters.categories.filter(
          (item) => item !== optionValue
        );
      } else {
        newFilters.categories.push(optionValue);
      }
    } else {
      // Adiciona ou remove a opção de filtro
      if (!newFilters.options[sectionId]) {
        newFilters.options[sectionId] = [];
      }

      if (newFilters.options[sectionId].includes(optionValue)) {
        newFilters.options[sectionId] = newFilters.options[sectionId].filter(
          (item) => item !== optionValue
        );
      } else {
        newFilters.options[sectionId].push(optionValue);
      }
    }

    setSelectedFilters(newFilters);
    onFilterChange(newFilters); // Passa os filtros para o componente pai (ou para a listagem de produtos)
  };

  return (
    <main className="w-60 hidden lg:block">
      <section
        aria-labelledby="products-heading"
        className="pt-6 pb-24 hidden lg:block"
      >
        <div>
          {/* Filters */}
          <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
            <ul
              role="list"
              className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
            >
              {subCategories.map((category) => (
                <li key={category.name}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters.categories.includes(
                        category.name
                      )}
                      onChange={() =>
                        handleFilterChange("categories", category.name)
                      }
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <Link to={category.to}>{category.name}</Link>
                  </label>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure
                key={section.id}
                as="div"
                className="border-b border-gray-200 py-6"
              >
                <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      {section.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="size-5 group-data-open:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="size-5 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option) => (
                      <div key={option.value} className="flex gap-3">
                        <div className="flex h-5 shrink-0 items-center">
                          <input
                            type="checkbox"
                            id={`filter-${section.id}-${option.value}`}
                            checked={selectedFilters.options[
                              section.id
                            ]?.includes(option.value)}
                            onChange={() =>
                              handleFilterChange(section.id, option.value)
                            }
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <label
                          htmlFor={`filter-${section.id}-${option.value}`}
                          className="text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </form>
        </div>
      </section>
    </main>
  );
}
