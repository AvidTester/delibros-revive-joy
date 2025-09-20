import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Mail, Car, UtensilsCrossed } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoni",
      details: ["+355 69 XXX XXXX", "+355 4 XXX XXXX"],
      action: "Telefono Tani"
    },
    {
      icon: MapPin,
      title: "Adresa",
      details: ["Rruga e Elbasanit", "Tiranë, Shqipëri"],
      action: "Shiko Hartën"
    },
    {
      icon: Clock,
      title: "Orari i Punës",
      details: ["E Hënë - E Shtunë: 11:00 - 23:00", "E Diel: 12:00 - 22:00"],
      action: "Rezervo Tani"
    }
  ];

  const services = [
    {
      icon: Car,
      title: "Dërgesë në Shtëpi",
      description: "Dërgesë falas për porosite mbi 1000 LEK"
    },
    {
      icon: UtensilsCrossed,
      title: "Rezervim Tavolinash",
      description: "Rezervo tavolinën tuaj me telefon ose online"
    },
    {
      icon: Mail,
      title: "Porosite Online",
      description: "Porosit online dhe merr me vetë ose dërgesë"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            KONTAKT
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Na <span className="text-accent">Kontaktoni</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Jemi të gatshëm t'ju shërbejmë! Kontaktoni me ne për porosi, rezervime ose çdo pyetje.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-glow transition-smooth">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground mb-2">
                    {detail}
                  </p>
                ))}
                <Button 
                  variant="outline" 
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Shërbimet Tona
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Porosit Tani
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Rezervo Tavolinë
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;