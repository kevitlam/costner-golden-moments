
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
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center mb-6 sm:mb-8 gap-2 sm:gap-4">
          <div className="flex items-center space-x-2 bg-amber-600/20 px-3 py-2 sm:px-4 sm:py-2 rounded-full">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium">Academy Award Winner</span>
          </div>
          <div className="flex items-center space-x-2 bg-amber-600/20 px-3 py-2 sm:px-4 sm:py-2 rounded-full">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium">Hollywood Legend</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight">
          An Exclusive Evening
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
          with Kevin Costner
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-stone-300 max-w-4xl mx-auto leading-relaxed px-2">
          Meet the star of Yellowstone, Dances with Wolves, and The Bodyguard. 
          Join Kevin for an intimate evening of stories, memories, and exclusive insights from his legendary career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve Your Spot
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-full"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Experiences
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-stone-400">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-amber-400">40+</div>
            <div className="text-xs sm:text-sm">Years in Hollywood</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-amber-400">2</div>
            <div className="text-xs sm:text-sm">Academy Awards</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-amber-400">7</div>
            <div className="text-xs sm:text-sm">Emmy Nominations</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
