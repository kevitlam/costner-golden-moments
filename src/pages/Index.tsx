
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Gallery } from "@/components/Gallery";
import { Registration } from "@/components/Registration";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <FeaturedVideo />
      <Gallery />
      <Registration />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
