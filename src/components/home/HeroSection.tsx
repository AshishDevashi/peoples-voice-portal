import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_40%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-in text-4xl font-bold leading-tight text-secondary-foreground md:text-5xl lg:text-6xl">
            Voice of the People,
            <br />
            <span className="text-primary">Fighting for Justice</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in text-lg text-secondary-foreground/80 [animation-delay:0.1s]">
            Vast Media TV News is a socially committed media organization that works 
            as a bridge between citizens and administration. We bring truth to light 
            and stand for the rights of every citizen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:0.2s]">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <Link to="/our-story">
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 sm:w-auto"
            >
              <Link to="/gallery">View Impact Gallery</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 35.8C384 38.3 480 51.7 576 56.7C672 61.7 768 58.3 864 51.7C960 45 1056 35 1152 33.3C1248 31.7 1344 38.3 1392 41.7L1440 45V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
