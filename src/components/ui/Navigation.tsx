import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Title */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white font-semibold text-lg hover:text-accent-cyan transition-colors"
          >
            Eswatini Tech Summit
          </button>

          {/* Right: Links - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('summit-overview')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('speakers')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection('hackathon-finale')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Hackathons
            </button>
            <button
              onClick={() => scrollToSection('prizes')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollToSection('partnership')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection('registration')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col pt-24 px-6 space-y-6">
            <button
              onClick={() => scrollToSection('summit-overview')}
              className="text-white text-xl hover:text-accent-cyan transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('speakers')}
              className="text-white text-xl hover:text-accent-cyan transition-colors text-left"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection('hackathon-finale')}
              className="text-white text-xl hover:text-accent-cyan transition-colors text-left"
            >
              Hackathons
            </button>
            <button
              onClick={() => scrollToSection('prizes')}
              className="text-white text-xl hover:text-accent-cyan transition-colors text-left"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollToSection('partnership')}
              className="text-white text-xl hover:text-accent-cyan transition-colors text-left"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection('registration')}
              className="text-white text-xl hover:text-accent-cyan transition-colors text-left"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
}
