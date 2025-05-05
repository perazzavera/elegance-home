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
  { name: "Sala de Estar", to: "/living-room" },
  { name: "Quarto", to: "/bedroom" },
  { name: "Sala de Jantar", to: "/dining" },
  { name: "Decoração", to: "/decor" },
  { name: "Coleções", to: "/collections" },
];

const customerServices = [
  { name: "Fale Conosco", to: "/contact-us" },
  { name: "FAQ", to: "/faq" },
  { name: "Envios & Devoluções", to: "/shipping-returns" },
  { name: "Termos & Condições", to: "/terms-conditions" },
  { name: "Política de Privacidade", to: "/privacy" },
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
            Elegance Home oferece móveis e soluções de design de interiores
            premium para clientes exigentes. Combinamos luxo com conforto para
            transformar seus espaços de vida.
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
            Categorias da Loja
          </h2>
          <div className="flex flex-col gap-2 lg:-ms-10">
            {categories.map((category) => (
              <Link
                className="hover:text-rose transition-all duration-150"
                key={category.name}
                to={category.to}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:items-center lg:w-fit lg:mx-auto">
          <h2 className="font-lato text-xl font-medium border-b-2 border-rose w-fit pb-2 mb-2">
            Atendimento ao Cliente
          </h2>
          <div className="flex flex-col gap-2">
            {customerServices.map((service) => (
              <Link
                className="hover:text-rose transition-all duration-150"
                key={service.name}
                to={service.to}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-lato text-xl font-medium border-b-2 border-rose w-fit pb-2 mb-2">
            Entre em contato
          </h2>

          <div>
            <div className="space-y-4 my-6">
              <div className="flex items-center gap-3">
                <LuPhone className="w-7 h-7 text-rose hover:text-white transition-all duration-150" />
                <a
                  className="font-montserrat text-lg"
                  href="tel:+1 (800) 123-4567"
                >
                  (47) 99876-5432
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LuMail className="w-7 h-7 text-rose hover:text-white transition-all duration-150" />
                <a
                  className="font-montserrat text-lg"
                  href="mailto:contact@elegancehome.com"
                >
                  contato@elegancehome.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LuMapPin className="w-7 h-7 text-rose hover:text-white transition-all duration-150" />
                <p className="font-montserrat text-lg">
                  Brusque, Santa Catarina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 border-t-1 border-rose pt-6">
        <p className="text-center">
          © 2025 Elegance Home. Todos os direitos reservados. Projeto fictício,
          não comercial *
        </p>
      </div>
    </footer>
  );
}
