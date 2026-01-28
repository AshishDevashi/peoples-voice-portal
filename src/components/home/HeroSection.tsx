import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const heroSlides = [
  { id: 1, image: heroSlide1, alt: "News broadcasting studio" },
  { id: 2, image: heroSlide2, alt: "Journalist interviewing citizens" },
  { id: 3, image: heroSlide3, alt: "News anchor at professional desk" },
];

export function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-[600px] overflow-hidden lg:h-[700px]">
      {/* Background Image Swiper */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
        <div className="max-w-3xl">
          <h1 className="animate-fade-in text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Voice of the People,
            <br />
            <span className="text-primary">Fighting for Justice</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-fade-in text-lg text-white/90 [animation-delay:0.1s]">
            Vast Media TV News is a socially committed media organization that
            works as a bridge between citizens and administration. We bring
            truth to light and stand for the rights of every citizen.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row [animation-delay:0.2s]">
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
              className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
            >
              <Link to="/gallery">View Impact Gallery</Link>
            </Button>
          </div>
        </div>

        {/* Swiper Indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="group relative h-3 w-3 rounded-full transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Background circle */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-primary"
                    : "bg-white/40 group-hover:bg-white/60"
                }`}
              />
              {/* Progress animation for active slide */}
              {selectedIndex === index && (
                <span className="absolute inset-0 animate-pulse rounded-full bg-primary ring-2 ring-primary/50 ring-offset-1 ring-offset-transparent" />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((selectedIndex + 1) / heroSlides.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
