
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Zap, TreePine, GraduationCap } from "lucide-react";

const Donations = () => {
  const causes = [
    {
      title: "Ocean Cleanup Initiative",
      description: "Supporting ocean conservation and cleanup efforts across the Pacific Coast",
      raised: "$2.1M",
      goal: "$5M",
      icon: Globe,
      image: "/lovable-uploads/712abbe8-be8f-44fa-a876-d3f987529567.png"
    },
    {
      title: "Veterans Support Program",
      description: "Providing mental health resources and job training for military veterans",
      raised: "$1.8M",
      goal: "$3M",
      icon: Users,
      image: "/lovable-uploads/43c1e7a1-74e6-477c-89c5-5a5bc91a9ef7.png"
    },
    {
      title: "Western Heritage Preservation",
      description: "Preserving American Western history and culture for future generations",
      raised: "$950K",
      goal: "$2M",
      icon: TreePine,
      image: "/lovable-uploads/f88e7212-1023-40c8-a7ce-9f664b6267d8.png"
    },
    {
      title: "Arts Education Fund",
      description: "Bringing music and film education to underserved communities nationwide",
      raised: "$1.2M",
      goal: "$2.5M",
      icon: GraduationCap,
      image: "/lovable-uploads/ad92aefc-88b5-436e-9f81-958cc808de7c.png"
    }
  ];

  const donationTiers = [
    {
      amount: "$25",
      title: "Supporter",
      benefits: ["Thank you note", "Quarterly newsletter", "Social media recognition"]
    },
    {
      amount: "$100",
      title: "Advocate",
      benefits: ["All Supporter benefits", "Exclusive video updates", "Digital certificate"]
    },
    {
      amount: "$500",
      title: "Champion",
      benefits: ["All Advocate benefits", "Personal thank you call", "Signed memorabilia"]
    },
    {
      amount: "$2,500",
      title: "Guardian",
      benefits: ["All Champion benefits", "VIP event invitations", "Meet & greet opportunity"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Make a <span className="text-amber-400">Difference</span>
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
            Join Kevin Costner in supporting causes that protect our planet, honor our veterans, and preserve our cultural heritage.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-stone-800/30 rounded-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">$8.5M+</div>
              <div className="text-stone-300">Total Raised</div>
            </div>
            <div className="text-center p-6 bg-stone-800/30 rounded-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">25,000+</div>
              <div className="text-stone-300">Lives Impacted</div>
            </div>
            <div className="text-center p-6 bg-stone-800/30 rounded-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">12</div>
              <div className="text-stone-300">Active Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Causes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured <span className="text-amber-400">Causes</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {causes.map((cause, index) => (
              <Card key={index} className="bg-stone-800/50 border-stone-700 overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <cause.icon className="w-8 h-8 text-amber-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{cause.title}</h3>
                  </div>
                  <p className="text-stone-300 mb-6 leading-relaxed">{cause.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-stone-300">Raised:</span>
                      <span className="text-amber-400 font-semibold">{cause.raised}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-300">Goal:</span>
                      <span className="text-white font-semibold">{cause.goal}</span>
                    </div>
                    <div className="w-full bg-stone-700 rounded-full h-3">
                      <div 
                        className="bg-amber-600 h-3 rounded-full"
                        style={{ 
                          width: `${(parseFloat(cause.raised.replace('$', '').replace('M', '').replace('K', '')) / parseFloat(cause.goal.replace('$', '').replace('M', '').replace('K', ''))) * (cause.raised.includes('K') ? 0.1 : 100)}%` 
                        }}
                      ></div>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Donate Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 bg-gradient-to-b from-amber-950 to-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Donation <span className="text-amber-400">Levels</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <Card key={index} className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">{tier.amount}</div>
                  <CardTitle className="text-xl text-white">{tier.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-stone-300 text-sm">
                        <Heart className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Choose This Level
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/lovable-uploads/6b54aa3f-1e78-45bc-91a8-623e0ed03684.png"
              alt="Kevin Costner"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-amber-400"
            />
            <blockquote className="text-2xl md:text-3xl text-white italic mb-8">
              "I've been blessed with success in Hollywood, and I believe it's my responsibility to give back. These causes represent what I'm passionate about - protecting our planet, supporting our heroes, and preserving our heritage for future generations."
            </blockquote>
            <cite className="text-amber-400 text-xl font-semibold">- Kevin Costner</cite>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-amber-400">Impact</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">500K+</div>
                <div className="text-stone-300">Pounds of Ocean Trash Removed</div>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">1,200+</div>
                <div className="text-stone-300">Veterans Supported</div>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <TreePine className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-stone-300">Historical Sites Preserved</div>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-stone-300">Students Reached</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donations;
