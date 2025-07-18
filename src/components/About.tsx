
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-stone-900 to-amber-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/ad92aefc-88b5-436e-9f81-958cc808de7c.png"
                alt="Kevin Costner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-amber-600 text-white p-3 sm:p-4 rounded-full shadow-lg">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Hollywood <span className="text-amber-400">Legend</span>
              </h2>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-4 sm:mb-6">
                Kevin Costner is an Academy Award-winning actor, director, and producer whose career has spanned over four decades. From his breakthrough role in "The Untouchables" to his iconic performances in "Dances with Wolves," "Field of Dreams," and "The Bodyguard," Kevin has consistently delivered memorable characters that resonate with audiences worldwide.
              </p>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                Today, as the star and executive producer of "Yellowstone," Kevin continues to captivate viewers as the patriarch John Dutton, bringing depth and authenticity to one of television's most compelling characters.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-stone-800/50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">180M+</div>
                <div className="text-sm sm:text-base text-stone-300">Box Office Worldwide</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-stone-800/50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">15M+</div>
                <div className="text-sm sm:text-base text-stone-300">Yellowstone Viewers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-colors">
              <CardContent className="p-4 sm:p-6 text-center">
                <achievement.icon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
