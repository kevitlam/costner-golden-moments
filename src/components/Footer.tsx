
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactMethods = [
    {
      icon: Mail,
      label: "🔥 VIP Private Access",
      value: "kevincostnerchat2025@gmail.com",
      description: "Direct line to Kevin's inner circle"
    },
    {
      icon: Mail,
      label: "💼 Business Opportunities",
      value: "Jeff.moore918@gmail.com",
      description: "Film investments & partnerships"
    },
    {
      icon: Mail,
      label: "💎 Exclusive Content",
      value: "privatelivechat3@gmail.com",
      description: "Behind-the-scenes access"
    },
    {
      icon: Phone,
      label: "📞 Direct Hotline",
      value: "+1 689-201-2277",
      description: "Call now for instant access"
    },
    {
      icon: MessageCircle,
      label: "⚡ Instant Connection",
      value: "@PrivateLiveChat12345",
      href: "https://t.me/PrivateLiveChat12345",
      description: "Join Kevin's private Telegram"
    }
  ];

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">Kevin Costner</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Academy Award winner Kevin Costner's official platform for exclusive experiences, 
              film investments, and direct access to Hollywood's most authentic star.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Access</h4>
            <div className="space-y-2">
              {["Personal Story", "Film Investments", "Private Events", "Gallery", "Donations"].map((link) => (
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
              <p className="mb-1">Official Yellowstone Star</p>
              <p>Kevin Costner & Modern West</p>
            </div>
          </div>
        </div>

        {/* Contact Methods Section */}
        <div className="border-t border-stone-800 pt-8 mb-8">
          <h4 className="text-xl font-bold text-amber-400 mb-6 text-center">🌟 Get Direct Access to Kevin Costner 🌟</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactMethods.map((contact, index) => (
              <div key={index} className="bg-stone-800/50 p-4 rounded-lg hover:bg-stone-800/70 transition-colors">
                <div className="flex items-start space-x-3">
                  <contact.icon className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-amber-400 font-bold text-sm mb-1">{contact.label}</div>
                    {contact.href ? (
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors text-sm break-all">
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-white text-sm break-all">{contact.value}</div>
                    )}
                    <div className="text-stone-400 text-xs mt-1">{contact.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-amber-400 font-bold text-lg">🎬 Don't miss your chance to connect with a Hollywood legend! 🎬</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stone-400 text-sm">
              © {currentYear} Kevin Costner Official. All rights reserved.
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
