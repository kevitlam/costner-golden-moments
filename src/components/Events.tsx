
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Users } from "lucide-react";

export const Events = () => {
  const events = [
    {
      title: "VIP Experience",
      price: "$2,500",
      duration: "3 hours",
      icon: Crown,
      color: "from-amber-600 to-orange-600",
      features: [
        "Private 30-minute one-on-one conversation",
        "Professional photo session",
        "Signed movie poster and book",
        "Exclusive dinner with Kevin",
        "Behind-the-scenes Yellowstone stories",
        "Personal memorabilia gift"
      ]
    },
    {
      title: "Meet & Photo",
      price: "$750",
      duration: "1 hour",
      icon: Star,
      color: "from-amber-500 to-yellow-500",
      features: [
        "15-minute personal meet and greet",
        "Professional photo opportunity",
        "Signed photograph",
        "Q&A session participation",
        "Exclusive merchandise"
      ]
    },
    {
      title: "Group Experience",
      price: "$350",
      duration: "2 hours",
      icon: Users,
      color: "from-yellow-500 to-amber-400",
      features: [
        "Group meet and greet (max 20 people)",
        "Group photo with Kevin",
        "Storytelling session",
        "Autograph opportunity",
        "Light refreshments"
      ]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-amber-950 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exclusive <span className="text-amber-400">Experiences</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Choose from our carefully crafted experiences designed to give you unforgettable moments with Kevin Costner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="bg-stone-800/50 border-stone-700 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-2xl">
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative flex items-center justify-between">
                  <event.icon className="w-12 h-12 text-amber-400" />
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{event.price}</div>
                    <div className="text-stone-400 text-sm">{event.duration}</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white relative">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {event.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-stone-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${event.color} hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg`}
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-400 mb-4">Limited availability • Intimate settings • Unforgettable memories</p>
          <div className="flex justify-center space-x-8 text-sm text-stone-500">
            <span>• Professional photography included</span>
            <span>• All memorabilia authenticated</span>
            <span>• Small group settings</span>
          </div>
        </div>
      </div>
    </section>
  );
};
