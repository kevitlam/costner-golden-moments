
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Events } from "@/components/Events";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      <div className="pt-16">
        <Events />
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
