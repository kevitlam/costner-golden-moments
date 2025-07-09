
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export const FeaturedVideo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-900 to-amber-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Life in <span className="text-amber-400">Cinema</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Watch Kevin share insights from his incredible journey through Hollywood and his iconic roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-stone-800/50 border-stone-700 overflow-hidden shadow-2xl">
            <div className="aspect-video relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&h=720&q=80"
                alt="Kevin Costner Interview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-amber-600 hover:bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-bold text-lg mb-1">Behind the Scenes with Kevin Costner</h3>
                  <p className="text-stone-300 text-sm">Exclusive stories from Yellowstone, Dances with Wolves, and more</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-stone-800/30 rounded-lg">
            <div className="text-2xl font-bold text-amber-400 mb-2">40+</div>
            <div className="text-stone-300">Major Film Roles</div>
          </div>
          <div className="text-center p-6 bg-stone-800/30 rounded-lg">
            <div className="text-2xl font-bold text-amber-400 mb-2">5</div>
            <div className="text-stone-300">Seasons of Yellowstone</div>
          </div>
          <div className="text-center p-6 bg-stone-800/30 rounded-lg">
            <div className="text-2xl font-bold text-amber-400 mb-2">12</div>
            <div className="text-stone-300">Directorial Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
