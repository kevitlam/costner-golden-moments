
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Star, Gift, Camera, Users } from "lucide-react";

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you soon with exclusive event details.",
    });
    setFormData({ name: "", email: "", phone: "", experience: "" });
  };

  const benefits = [
    {
      icon: Star,
      title: "Exclusive Access",
      description: "First notification of new events and experiences"
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Early bird pricing and VIP member discounts"
    },
    {
      icon: Camera,
      title: "Behind the Scenes",
      description: "Exclusive content and behind-the-scenes access"
    },
    {
      icon: Users,
      title: "Fan Community",
      description: "Connect with other Kevin Costner enthusiasts"
    }
  ];

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-stone-900 to-amber-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Reserve Your <span className="text-amber-400">Experience</span>
            </h2>
            <p className="text-xl text-stone-300">
              Join our exclusive list for priority access to Kevin Costner meet and greet events
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Registration Form */}
            <Card className="bg-stone-800/50 border-stone-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Register Your Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-stone-300">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-stone-700 border-stone-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-stone-300">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-stone-700 border-stone-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-stone-300">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-stone-700 border-stone-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="experience" className="text-stone-300">Preferred Experience</Label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full bg-stone-700 border border-stone-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select an experience</option>
                      <option value="vip">VIP Experience ($2,500)</option>
                      <option value="meet">Meet & Photo ($750)</option>
                      <option value="group">Group Experience ($350)</option>
                    </select>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg"
                  >
                    Register Now
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Member Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-stone-800/30 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-amber-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-stone-300 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 p-6 rounded-lg border border-amber-600/30">
                <h4 className="text-xl font-bold text-white mb-3">Limited Availability</h4>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Each event is limited to ensure an intimate, personal experience. 
                  Register now to secure your priority placement for upcoming events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
