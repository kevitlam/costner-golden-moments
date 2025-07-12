
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Story", path: "/story" },
    { name: "Investments", path: "/investments" },
    { name: "Donations", path: "/donations" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" }
  ];

  const isHomePage = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-stone-900/95 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 truncate">
            Kevin Costner
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-stone-200 hover:text-amber-400 transition-colors font-medium text-sm xl:text-base ${
                  location.pathname === item.path ? "text-amber-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Support Chat & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Chat Support Icon */}
            <a
              href="https://t.me/PrivateLiveChat12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors p-2 hover:bg-amber-600/20 rounded-full"
              title="💬 Chat Support - Get Instant Help!"
            >
              <MessageCircle size={24} className="sm:w-8 sm:h-8" />
            </a>

            {/* Mobile Menu Button - Much Larger size */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-stone-200 w-16 h-16 sm:w-20 sm:h-20 hover:bg-amber-600/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={56} className="sm:w-16 sm:h-16" />
              ) : (
                <Menu size={56} className="sm:w-16 sm:h-16" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-stone-900/98 backdrop-blur-sm border-t border-stone-700">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block w-full text-left px-6 py-4 text-lg font-medium text-stone-200 hover:text-amber-400 hover:bg-stone-800/50 transition-all duration-200 ${
                    location.pathname === item.path ? "text-amber-400 bg-stone-800/30" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Chat Support Link */}
              <a
                href="https://t.me/PrivateLiveChat12345"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-6 py-4 text-lg font-medium text-amber-400 hover:text-amber-300 hover:bg-stone-800/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                💬 Chat Support
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
