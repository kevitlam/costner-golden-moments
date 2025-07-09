
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Heart, Music, Mountain, Star, Award, Film } from "lucide-react";

const About = () => {
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

  const milestones = [
    { year: "1987", event: "Breakthrough role in 'The Untouchables'" },
    { year: "1990", event: "Directed and starred in 'Dances with Wolves'" },
    { year: "1991", event: "Won Academy Awards for Best Director and Best Picture" },
    { year: "1992", event: "Starred in 'The Bodyguard' with Whitney Houston" },
    { year: "2018", event: "Began starring in 'Yellowstone' as John Dutton" },
    { year: "2023", event: "Launched new film investment platform" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-amber-400">Kevin Costner</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Actor, Director, Producer, Musician, and Visionary
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/ad92aefc-88b5-436e-9f81-958cc808de7c.png"
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
                  <div className="text-3xl font-bold text-amber-400 mb-2">$180M+</div>
                  <div className="text-stone-300">Box Office Worldwide</div>
                </div>
                <div className="text-center p-4 bg-stone-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-400 mb-2">15M+</div>
                  <div className="text-stone-300">Yellowstone Viewers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-gradient-to-b from-amber-950 to-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Career <span className="text-amber-400">Highlights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Career <span className="text-amber-400">Timeline</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="text-2xl font-bold text-amber-400">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-amber-400 rounded-full mr-8"></div>
                <div className="flex-1">
                  <p className="text-lg text-stone-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
