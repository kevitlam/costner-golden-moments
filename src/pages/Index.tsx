
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Film, Heart, Users, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      <Hero />
      <About />
      <FeaturedVideo />
      
      {/* Quick Access Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12 leading-tight">
            Explore <span className="text-amber-400">More</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Link to="/story" className="block">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Kevin's Story</h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed flex-grow">Discover the personal journey, triumphs, and challenges</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/investments" className="block">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <Film className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Film Investments</h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed flex-grow">Invest in the next generation of Kevin's films</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/donations" className="block">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Support Causes</h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed flex-grow">Join Kevin in making a difference in the world</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/events" className="block">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Exclusive Events</h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed flex-grow">Meet Kevin at intimate, unforgettable experiences</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
