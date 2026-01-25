import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl bg-secondary">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Text */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-secondary-foreground md:text-4xl">
                Join Us in the Fight for{" "}
                <span className="text-primary">Justice</span>
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                Explore our gallery of impactful stories and read our latest 
                coverage on issues that matter to the people.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link to="/gallery">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    View Gallery
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  <Link to="/blog">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Blog
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent" />
              <div className="flex h-full items-center justify-center bg-primary/10 p-12">
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">50+ Follow-ups</p>
                      <p className="text-sm text-muted-foreground">Successfully resolved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">1000+ Lives</p>
                      <p className="text-sm text-muted-foreground">Positively impacted</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">9+ Categories</p>
                      <p className="text-sm text-muted-foreground">Of social issues covered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
