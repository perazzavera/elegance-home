import { Link } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";

const testimonials = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Interior Designer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    text: "The quality of furniture from Elegance Home is exceptional. My clients are always impressed with the craftsmanship and attention to detail. The service is personalized and professional.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    text: "Transforming our living room with Elegance Home pieces was the best decision. The furniture is not only beautiful but incredibly comfortable. I appreciate the sustainable materials and ethical practices.",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Architect",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 4,
    text: "As an architect, I value pieces that combine form and function. Elegance Home consistently delivers furniture that enhances my designs with their timeless elegance and superior quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-800 py-16 px-4 text-white lg:px-20">
      <h2 className="font-dm text-4xl lg:text-center">
        What Our Customers Say
      </h2>
      <p className="text-lg lg:text-center">
        Read about the experiences of our valued customers
      </p>
      {/* Slider */}
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true,
    "dotsItemClasses": "bg-white/70 border-0 hs-carousel-active:bg-rose hs-carousel-active:w-[20px] size-3 rounded-full cursor-pointer transition-all duration-300"
      }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-140 lg:min-h-100">
          <div className="hs-carousel-body w-full absolute top-0 bottom-0 start-0 flex flex-nowrap gap-4 transition-transform duration-700 opacity-0 ">
            {testimonials.map((item) => (
              <div className="hs-carousel-slide w-full px-6  bg-gray-700 rounded-3xl mt-6 lg:px-20">
                <div className="flex justify-center h-full  p-6 w-full">
                  <div className="self-center text-4xl  transition duration-700 ">
                    <div className="">
                      <img
                        className="w-25 h-25 object-center object-cover rounded-[100%] mx-auto border-2 border-rose"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="grid grid-cols-1 text-center mx-auto my-2">
                      <h3 className="font-dm text-2xl">{item.name}</h3>
                      <h5 className="text-lg">{item.role}</h5>
                      <div className="flex justify-center">
                        <RatingStars rating={item.rating} />
                      </div>
                    </div>
                    <div className="my-2">
                      <p className="text-lg text-center">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 start-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0  gap-x-2"></div>
      </div>
      {/* End Slider */}
    </section>
  );
}
