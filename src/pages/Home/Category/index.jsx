import { Link } from "react-router-dom";

const categories = [
  {
    id: "living-room",
    name: "Living Room",
    image: "/images/category-living.jpg",
    count: 124,
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "/images/category-bedroom.jpg",
    count: 98,
  },
  {
    id: "dining",
    name: "Dining",
    image: "/images/category-dining.jpg",
    count: 67,
  },
  {
    id: "decor",
    name: "Decor & Accessories",
    image: "/images/decor.jpg",
    count: 243,
  },
];

export default function Category() {
  return (
    <section className="py-16 px-4 lg:px-20">
      <h2 className="font-dm text-4xl text-gray-800 lg:text-center">
        Shop by category
      </h2>
      <p className="text-lg lg:text-center">
        Discover our carefully curated collections designed to elevate every
        room in your home
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {" "}
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="category-card group"
          >
            <div className="relative h-80 overflow-hidden rounded-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="font-dm text-xl text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-rose light text-sm">
                  {category.count} products
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
