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
  LucideIcon,
} from "lucide-react";

interface StoryCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image?: string; // Optional image URL
}

const storyCategories: StoryCategory[] = [
  {
    icon: Shield,
    title: "Police & Public Amenities",
    description:
      "[Placeholder: Detailed narrative about Vast Media TV News's work in ensuring proper policing and access to public services. Describe specific cases, interventions, and outcomes.]",
    color: "bg-blue-500",
    image: undefined, // No image - will be hidden
  },
  {
    icon: Bus,
    title: "Transport & Infrastructure",
    description:
      "[Placeholder: Stories about advocating for better roads, public transport systems, and infrastructure development in underserved areas.]",
    color: "bg-green-500",
    image: undefined,
  },
  {
    icon: Heart,
    title: "COVID-19 Contributions",
    description:
      "[Placeholder: Documentation of relief efforts, awareness campaigns, and community support provided during the COVID-19 pandemic.]",
    color: "bg-red-500",
    image: undefined,
  },
  {
    icon: Train,
    title: "Railways & Local Development",
    description:
      "[Placeholder: Coverage of railway connectivity issues, local development projects, and their impact on communities.]",
    color: "bg-purple-500",
    image: undefined,
  },
  {
    icon: Users,
    title: "Tribal & Social Development",
    description:
      "[Placeholder: Initiatives and coverage focused on tribal rights, social development, and inclusion of marginalized communities.]",
    color: "bg-orange-500",
    image: undefined,
  },
  {
    icon: UserCheck,
    title: "Women & Social Justice",
    description:
      "[Placeholder: Stories highlighting women's rights, gender equality, and social justice campaigns.]",
    color: "bg-pink-500",
    image: undefined,
  },
  {
    icon: TreeDeciduous,
    title: "Rural & Remote Area Development",
    description:
      "[Placeholder: Focus on bringing attention to the needs of rural and remote areas, including connectivity, healthcare, and education.]",
    color: "bg-emerald-500",
    image: undefined,
  },
  {
    icon: FileCheck,
    title: "Administrative Transparency",
    description:
      "[Placeholder: Efforts to promote transparency, accountability, and good governance in administrative bodies.]",
    color: "bg-indigo-500",
    image: undefined,
  },
  {
    icon: ShieldCheck,
    title: "Home Guards & Other Issues",
    description:
      "[Placeholder: Coverage of home guard welfare, security personnel issues, and other civic matters.]",
    color: "bg-cyan-500",
    image: undefined,
  },
];

interface StorySectionProps {
  category: StoryCategory;
  index: number;
}

function StorySection({ category, index }: StorySectionProps) {
  const isReversed = index % 2 === 1;
  const hasImage = !!category.image;

  return (
    <div
      className={`flex flex-col gap-6 rounded-2xl bg-card p-6 shadow-sm lg:gap-8 lg:p-8 ${
        hasImage ? (isReversed ? "lg:flex-row-reverse" : "lg:flex-row") : ""
      }`}
    >
      {/* Image Section - Only rendered if image exists */}
      {hasImage && (
        <div className="shrink-0 overflow-hidden rounded-xl lg:w-2/5">
          <img
            src={category.image}
            alt={category.title}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 lg:h-full"
          />
        </div>
      )}

      {/* Content Section */}
      <div className={`flex flex-1 flex-col ${hasImage ? "" : "lg:flex-row lg:items-start lg:gap-8"}`}>
        {/* Icon */}
        <div className={`flex shrink-0 items-start ${hasImage ? "mb-4" : ""}`}>
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-white`}
          >
            <category.icon className="h-8 w-8" />
          </div>
        </div>

        {/* Text Content */}
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
          
          {/* Image placeholder hint when no image */}
          {!hasImage && (
            <div className="mt-4 rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/30 p-4">
              <p className="text-center text-sm text-muted-foreground">
                📷 Add images to this category by providing image URLs in the data
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
              [Placeholder: Introduction paragraph about the founding of Vast
              Media TV News, its mission, and the visionaries behind it.
              Describe the journey from inception to becoming a trusted media
              organization that fights for people's rights.]
            </p>
          </div>

          {/* Category Sections */}
          <div className="space-y-12">
            {storyCategories.map((category, index) => (
              <StorySection
                key={category.title}
                category={category}
                index={index}
              />
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
