
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Heart, Music, Mountain } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Academy Awards",
      description: "Best Director & Best Picture for 'Dances with Wolves'"
    },
    {
      icon: Heart,
      title: "Family Man",
      description: "Father of seven children, devoted to family values"
    },
    {
      icon: Music,
      title: "Musician",
      description: "Lead singer of Kevin Costner & Modern West"
    },
    {
      icon: Mountain,
      title: "Yellowstone Star",
      description: "Portrays John Dutton in the hit series"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-stone-900 to-amber-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=480&h=600&q=80"
                alt="Kevin Costner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-full shadow-lg">
              <Trophy className="w-8 h-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hollywood <span className="text-amber-400">Legend</span>
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                Kevin Costner is an Academy Award-winning actor, director, and producer whose career has spanned over four decades. From his breakthrough role in "The Untouchables" to his iconic performances in "Dances with Wolves," "Field of Dreams," and "The Bodyguard," Kevin has consistently delivered memorable characters that resonate with audiences worldwide.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed">
                Today, as the star and executive producer of "Yellowstone," Kevin continues to captivate viewers as the patriarch John Dutton, bringing depth and authenticity to one of television's most compelling characters.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-stone-800/50 rounded-lg">
                <div className="text-3xl font-bold text-amber-400 mb-2">180M+</div>
                <div className="text-stone-300">Box Office Worldwide</div>
              </div>
              <div className="text-center p-4 bg-stone-800/50 rounded-lg">
                <div className="text-3xl font-bold text-amber-400 mb-2">15M+</div>
                <div className="text-stone-300">Yellowstone Viewers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-colors">
              <CardContent className="p-6 text-center">
                <achievement.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-stone-300 text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
