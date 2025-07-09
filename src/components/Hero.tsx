
import { Button } from "@/components/ui/button";
import { Star, Award, Film } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/lovable-uploads/6b54aa3f-1e78-45bc-91a8-623e0ed03684.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6 space-x-4">
          <div className="flex items-center space-x-2 bg-amber-600/20 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium">Academy Award Winner</span>
          </div>
          <div className="flex items-center space-x-2 bg-amber-600/20 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium">Hollywood Legend</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
          An Exclusive Evening
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          with Kevin Costner
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-stone-300 max-w-3xl mx-auto leading-relaxed">
          Meet the star of Yellowstone, Dances with Wolves, and The Bodyguard. 
          Join Kevin for an intimate evening of stories, memories, and exclusive insights from his legendary career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve Your Spot
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 text-lg font-semibold rounded-full"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Experiences
          </Button>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-stone-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">40+</div>
            <div className="text-sm">Years in Hollywood</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">2</div>
            <div className="text-sm">Academy Awards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">7</div>
            <div className="text-sm">Emmy Nominations</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
