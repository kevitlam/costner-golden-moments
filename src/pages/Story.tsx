
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, DollarSign, Users, Star } from "lucide-react";

const Story = () => {
  const personalMilestones = [
    {
      title: "Early Life & Dreams",
      period: "1955-1980",
      content: "Born in Lynwood, California, Kevin grew up with a passion for baseball and acting. Despite his father's wishes for him to pursue business, Kevin followed his heart into Hollywood.",
      image: "/lovable-uploads/6b54aa3f-1e78-45bc-91a8-623e0ed03684.png"
    },
    {
      title: "First Marriage & Stardom",
      period: "1978-1994",
      content: "Married to Cindy Silva, Kevin's career took off with films like 'The Untouchables' and 'Dances with Wolves.' However, the pressures of fame began to strain his personal life.",
      image: "/lovable-uploads/712abbe8-be8f-44fa-a876-d3f987529567.png"
    },
    {
      title: "Personal Struggles & Divorce",
      period: "1994-2004",
      content: "Kevin's first marriage ended amid rumors of infidelity and the stress of his demanding career. The divorce settlement was significant, and Kevin faced his first major financial challenges.",
      image: "/lovable-uploads/43c1e7a1-74e6-477c-89c5-5a5bc91a9ef7.png"
    },
    {
      title: "Management Betrayal",
      period: "2005-2010",
      content: "Kevin discovered his longtime business managers had misappropriated millions of dollars, leading to lawsuits and financial recovery efforts. This betrayal taught him the importance of personal oversight in business matters.",
      image: "/lovable-uploads/f88e7212-1023-40c8-a7ce-9f664b6267d8.png"
    },
    {
      title: "New Love & Redemption",
      period: "2004-Present",
      content: "Kevin found love again with Christine Baumgartner, and together they built a strong family foundation. He also took control of his finances and career, leading to the success of 'Yellowstone.'",
      image: "/lovable-uploads/ad92aefc-88b5-436e-9f81-958cc808de7c.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Kevin's <span className="text-amber-400">Journey</span>
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
            A story of triumph, heartbreak, betrayal, and ultimate redemption
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/6b54aa3f-1e78-45bc-91a8-623e0ed03684.png"
              alt="Kevin Costner"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Personal Story Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            The <span className="text-amber-400">Personal Story</span>
          </h2>
          
          <div className="space-y-16">
            {personalMilestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-amber-400 font-bold text-lg">{milestone.period}</span>
                    <div className="h-px bg-amber-400 flex-1"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{milestone.title}</h3>
                  <p className="text-stone-300 text-lg leading-relaxed">{milestone.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-gradient-to-b from-amber-950 to-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Lessons <span className="text-amber-400">Learned</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-stone-800/50 border-stone-700">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Love & Family</h3>
                <p className="text-stone-300">Family comes first, and true love is worth waiting for and fighting to protect.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Financial Control</h3>
                <p className="text-stone-300">Always maintain oversight of your finances and never blindly trust others with your money.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Trust Wisely</h3>
                <p className="text-stone-300">Surround yourself with people who have your best interests at heart, not just your wallet.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Resilience</h3>
                <p className="text-stone-300">Every setback is a setup for a comeback. Perseverance and integrity always win.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl text-white italic max-w-4xl mx-auto mb-8">
            "I've learned that success isn't just about the roles you play on screen, but the character you show when the cameras stop rolling. My greatest victories have come after my biggest defeats."
          </blockquote>
          <cite className="text-amber-400 text-xl font-semibold">- Kevin Costner</cite>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
