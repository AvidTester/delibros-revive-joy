import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">DELIBROS</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-smooth">
              Ballina
            </a>
            <a href="#menu" className="text-foreground hover:text-accent transition-smooth">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-smooth">
              Rreth Nesh
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-smooth">
              Kontakt
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+355 69 XXX XXXX</span>
            </div>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Porosit Tani
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-smooth"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Ballina
              </a>
              <a
                href="#menu"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Rreth Nesh
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  <span>+355 69 XXX XXXX</span>
                </div>
                <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
                  Porosit Tani
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;