import { Link } from "react-router-dom";

export default function DesignServices() {
  return (
    <section className="pb-16 px-4 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:px-20 lg:items-center">
      <div className="order-2">
        <h2 className="font-dm text-4xl text-gray-800">
          Interior Design Services
        </h2>
        <p className="text-lg mt-4 mb-8">
          Transform your home with our professional interior design services.
          Our experts will work with you to create a space that reflects your
          personal style.
        </p>
        <Link className="bg-rose text-white font-medium text-lg py-3 px-6 rounded-xl hover:bg-coral transition-all duration-300">
          Book a consultation
        </Link>
      </div>
      <div className="mt-6 lg:mt-0 lg:mx-auto">
        <img
          className="rounded-4xl shadow-md shadow-black/30 lg:h-150"
          src="/images/design.jpeg"
          alt="imagem de uma sala de estar com cores neutras um sofás e duas poltronas com uma mesinha de centro"
        />
      </div>
    </section>
  );
}
