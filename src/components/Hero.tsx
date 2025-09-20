import { ArrowRight, Clock, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBurger}
          alt="Delicious gourmet hamburger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              MIRË SE VINI NË{" "}
              <span className="text-accent">DELIBROS</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-primary-foreground/90">
              Eksperienca më e mirë e hamburgerit
            </p>
            <p className="text-lg mb-8 text-primary-foreground/80 leading-relaxed max-w-lg">
              Delibros është destinacioni juaj lokal për burgera gourmet të përgatitur 
              me përbërës të freskët dhe cilësorë. Ne i bashkojmë njerëzit përmes 
              kënaqësisë së thjeshtë që sjell një burger i realizuar me mjeshtëri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
              >
                Porosit me Vetë Delivery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Rezervo Tavolinë
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <Card className="p-4 bg-card/10 backdrop-blur-sm border-primary-foreground/20">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">20-30 min</div>
                    <div className="text-xs text-primary-foreground/70">Dërgesë</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/10 backdrop-blur-sm border-primary-foreground/20">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">4.8/5</div>
                    <div className="text-xs text-primary-foreground/70">Vlerësim</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/10 backdrop-blur-sm border-primary-foreground/20">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">2km</div>
                    <div className="text-xs text-primary-foreground/70">Rrezja</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right content - can be additional info or kept minimal for burger focus */}
          <div className="hidden lg:block">
            {/* Intentionally minimal to let the background burger image shine */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;