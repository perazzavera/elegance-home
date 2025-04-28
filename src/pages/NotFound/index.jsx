import { LuHouse } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="font-dm text-8xl font-bold text-rose">404</h2>
        <h3 className="font-dm text-gray-800 text-3xl my-4">Page Not Found</h3>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          className="flex items-center gap-2 bg-rose w-fit py-3 px-6 rounded-xl text-white font-medium text-xl mx-auto mt-6 hover:bg-coral transition-all duration-150"
          to="/"
        >
          <LuHouse className="w-6 h-6" /> Return to Homepage
        </Link>
      </div>
    </section>
  );
}
