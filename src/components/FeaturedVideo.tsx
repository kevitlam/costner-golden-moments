
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export const FeaturedVideo = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-stone-900 to-amber-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            A Life in <span className="text-amber-400">Cinema</span>
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Watch Kevin share exclusive insights from his incredible journey through Hollywood and his most iconic roles
          </p>
        </div>

        {/* Main Featured Video - Vimeo */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="bg-stone-800/50 border-stone-700 overflow-hidden shadow-2xl">
            <div className="relative" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe 
                src="https://player.vimeo.com/video/1100855873?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Kevin Costner Exclusive Interview"
                className="rounded-lg"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">🎬 Kevin Costner: Exclusive Behind-the-Scenes</h3>
              <p className="text-stone-300 text-sm sm:text-base">Rare insights from Yellowstone, Dances with Wolves, and upcoming projects you won't see anywhere else</p>
            </div>
          </Card>
        </div>

        {/* Secondary Video Preview */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="bg-stone-800/50 border-stone-700 overflow-hidden shadow-2xl">
            <div className="aspect-video relative group cursor-pointer">
              <img
                src="/lovable-uploads/f88e7212-1023-40c8-a7ce-9f664b6267d8.png"
                alt="Kevin Costner Interview Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-amber-600 hover:bg-amber-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">Personal Stories & Hollywood Secrets</h3>
                  <p className="text-stone-300 text-xs sm:text-sm">Untold stories from four decades in entertainment</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-stone-800/30 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">40+</div>
            <div className="text-stone-300 text-sm sm:text-base">Major Film Roles</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-stone-800/30 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">5</div>
            <div className="text-stone-300 text-sm sm:text-base">Seasons of Yellowstone</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-stone-800/30 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">12</div>
            <div className="text-stone-300 text-sm sm:text-base">Directorial Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
