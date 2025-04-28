import Category from "./Category";
import DesignServices from "./DesignServices";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";
import NewCollection from "./NewCollection";
import Subscription from "./Subscription";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewCollection />
      <Category />
      <FeaturedProducts />
      <DesignServices />
      <Testimonials />
      <Subscription />
    </>
  );
}
