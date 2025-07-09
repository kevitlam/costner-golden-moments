
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, TrendingUp, Users, Award, DollarSign, Star } from "lucide-react";

const Investments = () => {
  const investmentTiers = [
    {
      name: "Silver Screen",
      amount: "$5,000",
      benefits: [
        "Executive Producer credit",
        "Behind-the-scenes content access",
        "Exclusive premiere invitations",
        "Quarterly progress reports"
      ],
      roi: "8-12% projected annual return",
      icon: Film
    },
    {
      name: "Gold Rush",
      amount: "$25,000",
      benefits: [
        "Associate Producer credit",
        "Set visit opportunities",
        "Private screenings",
        "Direct communication with Kevin",
        "Merchandise and memorabilia"
      ],
      roi: "12-18% projected annual return",
      icon: TrendingUp
    },
    {
      name: "Platinum Legacy",
      amount: "$100,000+",
      benefits: [
        "Co-Producer credit",
        "Input on script development",
        "Personal meetings with Kevin",
        "Profit sharing agreements",
        "Legacy naming opportunities"
      ],
      roi: "18-25% projected annual return",
      icon: Award
    }
  ];

  const currentProjects = [
    {
      title: "Western Horizons",
      genre: "Western Drama",
      budget: "$45M",
      description: "A epic tale of family legacy and land disputes in modern-day Montana, featuring the signature storytelling that made Yellowstone a global phenomenon.",
      status: "Pre-Production",
      fundingGoal: "$15M",
      currentFunding: "$8.2M"
    },
    {
      title: "The Last Marshal",
      genre: "Action Thriller",
      budget: "$32M",
      description: "Kevin stars as a veteran U.S. Marshal tracking down a dangerous fugitive across the American Southwest.",
      status: "Development",
      fundingGoal: "$10M",
      currentFunding: "$4.1M"
    },
    {
      title: "Coastal Winds",
      genre: "Drama",
      budget: "$28M",
      description: "A touching story about a lighthouse keeper who discovers family secrets that change his life forever.",
      status: "Script Review",
      fundingGoal: "$8M",
      currentFunding: "$2.3M"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-stone-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Film <span className="text-amber-400">Investments</span>
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
            Join Kevin Costner in creating the next generation of compelling cinema. Invest in stories that matter.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-stone-800/30 rounded-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">$120M+</div>
              <div className="text-stone-300">Total Raised</div>
            </div>
            <div className="text-center p-6 bg-stone-800/30 rounded-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">15</div>
              <div className="text-stone-300">Films Funded</div>
            </div>
            <div className="text-center p-6 bg-stone-800/30 rounded-lg">
              <div className="text-3xl font-bold text-amber-400 mb-2">2,400+</div>
              <div className="text-stone-300">Active Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Investment <span className="text-amber-400">Opportunities</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {investmentTiers.map((tier, index) => (
              <Card key={index} className="bg-stone-800/50 border-stone-700 hover:border-amber-600 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <tier.icon className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-amber-400">{tier.amount}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center text-stone-300 mb-4">{tier.roi}</div>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-stone-300">
                        <Star className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Invest Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-gradient-to-b from-amber-950 to-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Current <span className="text-amber-400">Projects</span>
          </h2>
          
          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="bg-stone-800/50 border-stone-700">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                          {project.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-amber-400 font-semibold">{project.genre}</span>
                        <span className="text-stone-400">•</span>
                        <span className="text-stone-300">Budget: {project.budget}</span>
                      </div>
                      <p className="text-stone-300 leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-stone-900/50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-stone-300">Funding Goal:</span>
                          <span className="text-amber-400 font-semibold">{project.fundingGoal}</span>
                        </div>
                        <div className="flex justify-between mb-3">
                          <span className="text-stone-300">Current:</span>
                          <span className="text-white font-semibold">{project.currentFunding}</span>
                        </div>
                        <div className="w-full bg-stone-700 rounded-full h-2 mb-4">
                          <div 
                            className="bg-amber-600 h-2 rounded-full"
                            style={{ width: `${(parseFloat(project.currentFunding.replace('$', '').replace('M', '')) / parseFloat(project.fundingGoal.replace('$', '').replace('M', ''))) * 100}%` }}
                          ></div>
                        </div>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          Invest in This Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 bg-gradient-to-b from-stone-900 to-amber-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Invest with <span className="text-amber-400">Kevin</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <Film className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-stone-300">40+ years in Hollywood with $2B+ in box office returns</p>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Strong Returns</h3>
                <p className="text-stone-300">Average 15% annual returns for our investor partners</p>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Exclusive Access</h3>
                <p className="text-stone-300">Behind-the-scenes content and personal interactions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-stone-800/50 border-stone-700 text-center">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Transparent Process</h3>
                <p className="text-stone-300">Regular updates, clear terms, and honest communication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investments;
