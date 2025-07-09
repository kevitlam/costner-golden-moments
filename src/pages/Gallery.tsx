
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      <div className="pt-16">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
