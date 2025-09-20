import { Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">DELIBROS</div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Destinacioni juaj lokal për burgera gourmet të përgatitur me përbërës të freskët 
              dhe cilësorë. Ne i bashkojmë njerëzit përmes kënaqësisë së thjeshtë që sjell 
              një burger i realizuar me mjeshtëri.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/60">
              <span>Bërë me</span>
              <Heart className="h-4 w-4 text-accent" />
              <span>në Tiranë</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Lidhje të Shpejta</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Ballina
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Rreth Nesh
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>+355 69 XXX XXXX</div>
                  <div className="text-sm">+355 4 XXX XXXX</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Rruga e Elbasanit</div>
                  <div className="text-sm">Tiranë, Shqipëri</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div className="text-sm">E Hënë - E Shtunë: 11:00 - 23:00</div>
                  <div className="text-sm">E Diel: 12:00 - 22:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Delibros. Të gjitha të drejtat janë të rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;