import { Link } from "react-router-dom";
import { 
  Shield, 
  Bus, 
  Heart, 
  Train, 
  Users, 
  UserCheck, 
  TreeDeciduous, 
  FileCheck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    icon: Shield,
    title: "Police & Public Amenities",
    description: "Ensuring proper policing and access to public services for all citizens.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Bus,
    title: "Transport & Infrastructure",
    description: "Advocating for better roads, public transport, and infrastructure development.",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Heart,
    title: "COVID-19 Contributions",
    description: "Supporting communities during the pandemic with relief and awareness.",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    icon: Train,
    title: "Railways & Local Development",
    description: "Highlighting railway connectivity and local development needs.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Users,
    title: "Tribal & Social Development",
    description: "Championing the rights and development of tribal communities.",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    icon: UserCheck,
    title: "Women & Social Justice",
    description: "Fighting for women's rights and social justice for all.",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    icon: TreeDeciduous,
    title: "Rural & Remote Development",
    description: "Bringing attention to the needs of rural and remote areas.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: FileCheck,
    title: "Administrative Transparency",
    description: "Promoting transparency and accountability in governance.",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
];

export function InitiativesTimeline() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Key <span className="text-primary">Initiatives</span> & Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our successful follow-ups and campaigns that made a difference
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className="group rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`mb-4 inline-flex rounded-lg p-3 ${initiative.color}`}>
                <initiative.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                {initiative.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/our-story">
              Explore All Initiatives
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
