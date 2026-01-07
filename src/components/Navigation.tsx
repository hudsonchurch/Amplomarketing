import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-montserrat font-bold text-navy">
              AMPLO
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-navy hover:text-gold transition-colors font-medium">
              How It Works
            </button>
            <button onClick={() => scrollToSection('proof')} className="text-navy hover:text-gold transition-colors font-medium">
              Proof
            </button>
            <button onClick={() => scrollToSection('services')} className="text-navy hover:text-gold transition-colors font-medium">
              Services
            </button>
            <a href="#/contact" className="text-navy hover:text-gold transition-colors font-medium">
              Contact
            </a>
            <a href="#/apply" className="text-navy hover:text-gold transition-colors font-medium">
              Apply Now
            </a>
            
          </div>

          {/* Trust Badge */}
          <div className="hidden lg:block trust-badge">
            🔥 30M+ Views Generated | Only 5 Partnerships Available
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => scrollToSection('apply')} className="btn-primary text-sm px-6 py-2">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;