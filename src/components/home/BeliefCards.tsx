import { Megaphone, Scale, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const beliefs = [
  {
    icon: Megaphone,
    title: "Voice of the People",
    description:
      "We amplify the voices of ordinary citizens, ensuring their concerns reach the corridors of power.",
  },
  {
    icon: Scale,
    title: "Media that Fights for Justice",
    description:
      "Our journalism is driven by a commitment to truth, transparency, and holding the powerful accountable.",
  },
  {
    icon: Handshake,
    title: "Bridge Between Administration and Citizens",
    description:
      "We facilitate dialogue and understanding between government bodies and the communities they serve.",
  },
];

export function BeliefCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Our <span className="text-primary">Belief</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The core principles that guide our mission to serve the people
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {beliefs.map((belief, index) => (
            <Card
              key={belief.title}
              className="group border-2 border-transparent bg-card transition-all duration-300 hover:border-primary hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <belief.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {belief.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
