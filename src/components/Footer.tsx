
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">Kevin Costner</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Exclusive meet and greet experiences with Academy Award winner Kevin Costner. 
              Creating unforgettable memories for fans worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {["About Kevin", "Experiences", "Gallery", "FAQ", "Register"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase().replace(" ", ""))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-stone-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-stone-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@kevincostnerevents.com</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Kevin</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-stone-400 text-sm">
              <p className="mb-1">Official Yellowstone</p>
              <p>Kevin Costner & Modern West</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stone-400 text-sm">
              © {currentYear} Kevin Costner Events. All rights reserved.
            </div>
            <div className="flex space-x-8 text-stone-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
