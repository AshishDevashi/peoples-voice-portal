import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  mockGalleryItems,
  mockTestimonials,
  galleryCategories,
  type GalleryItem,
} from "@/data/mockGalleryItems";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const filteredItems =
    selectedCategory === "All"
      ? mockGalleryItems
      : mockGalleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex]);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % mockTestimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-secondary-foreground md:text-5xl">
              Impact <span className="text-primary">Gallery</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80">
              A visual journey through our work – see the real impact of 
              investigative journalism on communities and lives.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Badge className="absolute right-2 top-2 bg-primary/90 text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                  <p className="mt-1 text-xs text-muted-foreground/60">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Citizen <span className="text-primary">Testimonials</span>
          </h2>

          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl bg-card p-8 shadow-lg lg:p-12">
              <Quote className="absolute left-6 top-6 h-12 w-12 text-primary/20" />
              <div className="relative z-10">
                <p className="text-lg italic leading-relaxed text-card-foreground">
                  "{mockTestimonials[testimonialIndex].quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <img
                      src={mockTestimonials[testimonialIndex].imageUrl}
                      alt={mockTestimonials[testimonialIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {mockTestimonials[testimonialIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mockTestimonials[testimonialIndex].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex gap-2">
                  {mockTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTestimonialIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === testimonialIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.caption}
              className="max-h-[80vh] rounded-lg object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-lg text-white">{selectedImage.caption}</p>
              <p className="mt-1 text-sm text-white/60">
                {selectedImage.category} • {selectedImage.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
