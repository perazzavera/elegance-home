import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";
import { useState } from "react";

const subCategories = [
  { name: "Chairs", to: `/products/furniture/chairs` },
  { name: "Tables", to: `/products/furniture/tables` },
  { name: "Sofas", to: `/products/furniture/sofas` },
  { name: "Luminaires", to: `/products/lighting/luminaires` },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "furniture", label: "Furniture", checked: false },
      { value: "lighting", label: "Lighting", checked: false },
      { value: "decor", label: "Decor", checked: false },
      { value: "new", label: "New", checked: false },
      { value: "sale", label: "Sale", checked: false },
    ],
  },
];

export default function Example({ mobileFiltersOpen, setMobileFiltersOpen }) {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    options: {},
  });

  const handleFilterChange = (sectionId, optionValue) => {
    const newFilters = { ...selectedFilters };

    if (sectionId === "categories") {
      if (newFilters.categories.includes(optionValue)) {
        newFilters.categories = newFilters.categories.filter(
          (item) => item !== optionValue
        );
      } else {
        newFilters.categories.push(optionValue);
      }
    } else {
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
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          subCategories={subCategories}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        {/* Desktop filter  */}
        <DesktopFilter
          subCategories={subCategories}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}
