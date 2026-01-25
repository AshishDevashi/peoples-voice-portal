import { Layout } from "@/components/layout/Layout";
import {
  Shield,
  Bus,
  Heart,
  Train,
  Users,
  UserCheck,
  TreeDeciduous,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

const storyCategories = [
  {
    icon: Shield,
    title: "Police & Public Amenities",
    description:
      "[Placeholder: Detailed narrative about Vast Media TV News's work in ensuring proper policing and access to public services. Describe specific cases, interventions, and outcomes.]",
    color: "bg-blue-500",
  },
  {
    icon: Bus,
    title: "Transport & Infrastructure",
    description:
      "[Placeholder: Stories about advocating for better roads, public transport systems, and infrastructure development in underserved areas.]",
    color: "bg-green-500",
  },
  {
    icon: Heart,
    title: "COVID-19 Contributions",
    description:
      "[Placeholder: Documentation of relief efforts, awareness campaigns, and community support provided during the COVID-19 pandemic.]",
    color: "bg-red-500",
  },
  {
    icon: Train,
    title: "Railways & Local Development",
    description:
      "[Placeholder: Coverage of railway connectivity issues, local development projects, and their impact on communities.]",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    title: "Tribal & Social Development",
    description:
      "[Placeholder: Initiatives and coverage focused on tribal rights, social development, and inclusion of marginalized communities.]",
    color: "bg-orange-500",
  },
  {
    icon: UserCheck,
    title: "Women & Social Justice",
    description:
      "[Placeholder: Stories highlighting women's rights, gender equality, and social justice campaigns.]",
    color: "bg-pink-500",
  },
  {
    icon: TreeDeciduous,
    title: "Rural & Remote Area Development",
    description:
      "[Placeholder: Focus on bringing attention to the needs of rural and remote areas, including connectivity, healthcare, and education.]",
    color: "bg-emerald-500",
  },
  {
    icon: FileCheck,
    title: "Administrative Transparency",
    description:
      "[Placeholder: Efforts to promote transparency, accountability, and good governance in administrative bodies.]",
    color: "bg-indigo-500",
  },
  {
    icon: ShieldCheck,
    title: "Home Guards & Other Issues",
    description:
      "[Placeholder: Coverage of home guard welfare, security personnel issues, and other civic matters.]",
    color: "bg-cyan-500",
  },
];

const OurStory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-secondary-foreground md:text-5xl">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80">
              The journey of Vast Media TV News – from a vision of justice to 
              becoming a trusted voice for the people. Explore our work across 
              various sectors that impact everyday lives.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              [Placeholder: Introduction paragraph about the founding of Vast Media TV News, 
              its mission, and the visionaries behind it. Describe the journey from inception 
              to becoming a trusted media organization that fights for people's rights.]
            </p>
          </div>

          {/* Category Sections */}
          <div className="space-y-12">
            {storyCategories.map((category, index) => (
              <div
                key={category.title}
                className={`flex flex-col gap-6 rounded-2xl bg-card p-6 shadow-sm lg:flex-row lg:items-start lg:gap-8 lg:p-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex shrink-0 items-start">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-white`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="mb-4 text-2xl font-bold text-card-foreground">
                    {category.title}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-4 h-px w-full bg-border" />
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    [Add specific case studies, statistics, and success stories here]
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-primary/10 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Our Commitment Continues
            </h3>
            <p className="mt-4 text-muted-foreground">
              [Placeholder: Closing statement about the ongoing commitment to 
              justice, future goals, and how citizens can participate in or 
              support the mission of Vast Media TV News.]
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;
