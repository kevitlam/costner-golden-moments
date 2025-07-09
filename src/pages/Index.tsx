
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
      <section className="py-20 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Explore <span className="text-amber-400">More</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/story">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">Kevin's Story</h3>
                  <p className="text-stone-300">Discover the personal journey, triumphs, and challenges</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/investments">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Film className="w-12 h-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">Film Investments</h3>
                  <p className="text-stone-300">Invest in the next generation of Kevin's films</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/donations">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">Support Causes</h3>
                  <p className="text-stone-300">Join Kevin in making a difference in the world</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/events">
              <Card className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-12 h-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">Exclusive Events</h3>
                  <p className="text-stone-300">Meet Kevin at intimate, unforgettable experiences</p>
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
