import {
  LuFacebook,
  LuInstagram,
  LuMail,
  LuMapPin,
  LuPhone,
  LuTwitter,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const categories = [
  { name: "Living Room", to: "/living-room" },
  { name: "Bedroom", to: "/bedroom" },
  { name: "Dining", to: "/dining" },
  { name: "Decor", to: "/decor" },
  { name: "Collections", to: "/collections" },
];

const customerServices = [
  { name: "Contact Us", to: "/contact-us" },
  { name: "FAQ", to: "/faq" },
  { name: "Shipping & Returns", to: "/shipping-returns" },
  { name: "Terms & Conditions", to: "/terms-conditions" },
  { name: "Privacy Policy", to: "/privacy" },
];

export default function Rodape() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 lg:px-20">
      <div className="space-y-6 lg:grid lg:grid-cols-4 lg:items-end-start lg:gap-6">
        <div>
          <div className="flex items-baseline">
            <h1 className="text-3xl text-rose lg:text-4xl">ELEGANCE</h1>
            <p className="text-rose text-sm ">HOME</p>
          </div>
          <p className="my-3">
            Elegance Home offers premium furniture and interior design solutions
            for the discerning customer. We blend luxury with comfort to
            transform your living spaces.
          </p>
          <nav className="flex gap-4">
            <a href="http://facebook.com">
              <LuFacebook className="h-8 w-8 text-rose hover:text-white transition-all duration-300" />
            </a>
            <a href="http://instagram.com">
              <LuInstagram className="h-8 w-8 text-rose hover:text-white transition-all duration-300" />
            </a>
            <a href="http://twitter.com">
              <LuTwitter className="h-8 w-8 text-rose hover:text-white transition-all duration-300" />
            </a>
          </nav>
        </div>
        <div className="flex flex-col lg:items-center lg:w-fit lg:mx-auto">
          <h2 className="font-lato text-xl font-medium border-b-2 border-rose w-fit pb-2 mb-2">
            Shop Categories
          </h2>
          <div className="flex flex-col gap-2 lg:-ms-10">
            {categories.map((category) => (
              <Link
                className="hover:text-rose transition-all duration-150"
                key={category.id}
                to={category.to}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:items-center lg:w-fit lg:mx-auto">
          <h2 className="font-lato text-xl font-medium border-b-2 border-rose w-fit pb-2 mb-2">
            Customer Service
          </h2>
          <div className="flex flex-col gap-2">
            {customerServices.map((service) => (
              <Link
                className="hover:text-rose transition-all duration-150"
                key={service.id}
                to={service.to}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-lato text-xl font-medium border-b-2 border-rose w-fit pb-2 mb-2">
            Stay Updated
          </h2>
          <p className="mb-4">
            Subscribe to our newsletter for exclusive offers and interior design
            tips.
          </p>
          <div>
            <label for="hs-trailing-button-add-on" class="sr-only">
              Label
            </label>
            <div class="flex rounded-lg">
              <input
                type="text"
                id="hs-trailing-button-add-on"
                placeholder="Your email adress"
                name="hs-trailing-button-add-on"
                className="py-3 px-4 w-full border-1 border-rose rounded-s-lg sm:text-sm focus:z-10 focus:border-coral focus:ring-coral disabled:opacity-50 disabled:pointer-events-none focus:outline-0"
              />
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-rose text-white hover:bg-coral focus:outline-hidden focus:bg-coral disabled:opacity-50 disabled:pointer-events-none"
              >
                Subscribe
              </button>
            </div>
            <div className="space-y-4 my-6">
              <div className="flex items-center gap-3">
                <LuPhone className="w-7 h-7 text-rose hover:text-white transition-all duration-150" />
                <a
                  className="font-montserrat text-lg"
                  href="tel:+1 (800) 123-4567"
                >
                  +1 (800) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LuMail className="w-7 h-7 text-rose hover:text-white transition-all duration-150" />
                <a
                  className="font-montserrat text-lg"
                  href="mailto:contact@elegancehome.com"
                >
                  contact@elegancehome.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LuMapPin className="w-7 h-7 text-rose hover:text-white transition-all duration-150" />
                <p className="font-montserrat text-lg">
                  123 Luxury Lane, Design District{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 border-t-1 border-rose pt-6">
        <p className="text-center">
          © 2025 Elegance Home. All rights reserved. Fictitious project,
          non-commercial *
        </p>
      </div>
    </footer>
  );
}
