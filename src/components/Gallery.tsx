
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Gallery = () => {
  const galleryImages = [
    { src: "/placeholder.svg?height=400&width=300&text=Kevin+on+Yellowstone+Set", alt: "Kevin on Yellowstone Set" },
    { src: "/placeholder.svg?height=400&width=300&text=Dances+with+Wolves+BTS", alt: "Behind the scenes of Dances with Wolves" },
    { src: "/placeholder.svg?height=400&width=300&text=Kevin+with+Fans", alt: "Kevin meeting fans" },
    { src: "/placeholder.svg?height=400&width=300&text=Field+of+Dreams+Scene", alt: "Field of Dreams scene" },
    { src: "/placeholder.svg?height=400&width=300&text=Kevin+Family+Beach", alt: "Kevin with family at beach" },
    { src: "/placeholder.svg?height=400&width=300&text=Awards+Ceremony", alt: "Kevin at awards ceremony" }
  ];

  const testimonials = [
    {
      quote: "Meeting Kevin was absolutely magical. He's so down-to-earth and genuinely interested in connecting with his fans.",
      author: "Sarah M.",
      location: "Los Angeles, CA"
    },
    {
      quote: "The stories he shared about filming Yellowstone were incredible. You can tell he really cares about his craft and his fans.",
      author: "Mike R.",
      location: "Nashville, TN"
    },
    {
      quote: "Kevin spent so much time with each person. It felt like talking to an old friend rather than a Hollywood star.",
      author: "Jennifer L.",
      location: "Austin, TX"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-950 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Memories & <span className="text-amber-400">Moments</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            See Kevin in action and hear from fans who've experienced these exclusive events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/5] relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Fans Are Saying</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-stone-800/50 border-stone-700 p-6">
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-stone-300 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-stone-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-stone-400 text-sm">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
