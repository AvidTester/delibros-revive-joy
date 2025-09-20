import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Clock, Award, Users } from "lucide-react";
import freshIngredients from "@/assets/fresh-ingredients.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Përbërës Organikë",
      description: "Përdorim vetëm përbërës organikë sezonalë të zgjedhur me kujdes për cilësi maksimale."
    },
    {
      icon: Clock,
      title: "I Freskët Gjithmonë",
      description: "Mishi viçi nuk ngritet kurrë, buka përgatitet çdo ditë me dorë në restorantin tonë."
    },
    {
      icon: Award,
      title: "Cilësi e Lartë",
      description: "Standardet tona të larta të cilësisë garantojnë një përvojë të paharrueshme."
    },
    {
      icon: Users,
      title: "Mikpritje e Ngrohtë",
      description: "Stafi ynë është i trajnuar për të ofruar shërbimin më të mirë për çdo klient."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-6">
              QASJA JONË
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Thjeshtësia Takon <span className="text-accent">Mjeshtërinë</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Te Delibros, ne besojmë se burgerat më të mirë vijnë nga përbërësit më të mirë 
              dhe dashuria për atë që bëjmë. Çdo burger përgatitet me kujdes të madh, duke 
              përdorur teknikat tradicionale dhe përbërës të zgjedhur me dorë.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <value.icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-accent/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pse na zgjedhin klientët?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                "Delibros ka burgerat më të shijshëm në qytet! Përbërësit e freskët 
                dhe cilësia e lartë e shërbimit bëjnë që të kthehem çdo javë."
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="text-sm font-medium text-foreground">Alban Krasniqi</div>
                <div className="text-sm text-muted-foreground">• Klient besnik</div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={freshIngredients}
                alt="Përbërës të freskët"
                className="w-full h-64 object-cover rounded-lg shadow-soft"
              />
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-medium text-foreground">Përbërës të Freskët</div>
                <div className="text-xs text-muted-foreground">Të zgjedhur çdo ditë</div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={restaurantInterior}
                alt="Ambienti i restorantit"
                className="w-full h-64 object-cover rounded-lg shadow-soft"
              />
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-medium text-foreground">Ambient i Ngrohtë</div>
                <div className="text-xs text-muted-foreground">Ideal për familjen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;