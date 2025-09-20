import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Heart } from "lucide-react";

const FeaturedMenu = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Delibros Classic",
      description: "Mish viçi i freskët, sallatë, domate, kastravec, djathë cheddar, salcë speciale",
      price: "800",
      image: "/api/placeholder/300/200",
      popular: true,
      category: "Burger Klasikë"
    },
    {
      id: 2,
      name: "BBQ Bacon Burger",
      description: "Mish viçi, bacon i pjekur, djathë, salcë BBQ, qepë karamele",
      price: "950",
      image: "/api/placeholder/300/200",
      popular: false,
      category: "Burger Premium"
    },
    {
      id: 3,
      name: "Veggie Delight",
      description: "Burger vegjetarian me quinoa, avokado, sallatë, domate, salcë tahini",
      price: "750",
      image: "/api/placeholder/300/200",
      popular: false,
      category: "Burger Vegjetarian"
    },
    {
      id: 4,
      name: "Spicy Jalapeño",
      description: "Mish viçi, jalapeño, djathë meksikan, salcë pikante, sallatë iceberg",
      price: "900",
      image: "/api/placeholder/300/200",
      popular: true,
      category: "Burger Pikant"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            MENU
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Burgerat Tanë <span className="text-accent">Më të Njohur</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Përgatitur me përbërës organikë sezonalë, mish viçi që nuk është ngrirë kurrë, 
            bukë të përgatitura me dorë dhe salca të përgatitura nga e para.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-glow transition-smooth overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                {item.popular && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    Më i Pëlqyer
                  </Badge>
                )}
                <button className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-smooth hover:bg-card">
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-accent" />
                </button>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {item.name}
                    </CardTitle>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{item.price}</div>
                    <div className="text-sm text-muted-foreground">LEK</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </CardDescription>
                
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Plus className="mr-2 h-4 w-4" />
                  Shto në Shportë
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Shiko Menu të Plotë
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;