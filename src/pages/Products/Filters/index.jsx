import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";

const subCategories = [
  { name: "Chairs", to: `/products/furniture/chairs` },
  { name: "Tables", to: `/products/furniture/tables` },
  { name: "Sofas", to: `/products/furniture/sofas` },
  { name: "Chandeliers", to: `/products/lighting/chandeliers` },
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
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          subCategories={subCategories}
          filters={filters}
        />

        {/* Desktop filter  */}
        <DesktopFilter subCategories={subCategories} filters={filters} />
      </div>
    </div>
  );
}
