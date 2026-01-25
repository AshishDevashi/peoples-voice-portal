import { useState } from "react";
import { FileText, Download, Eye, Calendar, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockPdfDocuments, pdfCategories, type PdfDocument } from "@/data/mockPdfDocuments";

const PdfLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPdf, setSelectedPdf] = useState<PdfDocument | null>(null);

  const filteredDocs =
    selectedCategory === "All"
      ? mockPdfDocuments
      : mockPdfDocuments.filter((doc) => doc.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Notices":
        return "bg-blue-500 text-white";
      case "Reports":
        return "bg-green-500 text-white";
      case "Letters":
        return "bg-orange-500 text-white";
      case "Official Documents":
        return "bg-purple-500 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const openViewer = (doc: PdfDocument) => {
    setSelectedPdf(doc);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setSelectedPdf(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-secondary-foreground md:text-5xl">
              PDF <span className="text-primary">Library</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80">
              Access official letters, notices, reports, and documents 
              related to our investigative work and follow-ups.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {pdfCategories.map((category) => (
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

      {/* PDF Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={doc.thumbnailUrl}
                    alt={doc.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <FileText className="h-16 w-16 text-white/80" />
                  </div>
                  <Badge className={`absolute right-2 top-2 ${getCategoryColor(doc.category)}`}>
                    {doc.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 font-semibold text-card-foreground">
                    {doc.title}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(doc.date).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => openViewer(doc)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDocs.length === 0 && (
            <div className="py-16 text-center">
              <FileText className="mx-auto h-16 w-16 text-muted-foreground/50" />
              <p className="mt-4 text-lg text-muted-foreground">
                No documents found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeViewer}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-card p-4">
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {selectedPdf.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedPdf.category} • {new Date(selectedPdf.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="ghost" size="icon" onClick={closeViewer}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* PDF Preview Area */}
            <div className="flex h-[70vh] items-center justify-center bg-muted p-8">
              <div className="text-center">
                <FileText className="mx-auto h-24 w-24 text-muted-foreground/50" />
                <p className="mt-4 text-lg text-muted-foreground">
                  [PDF Preview]
                </p>
                <p className="mt-2 text-sm text-muted-foreground/70">
                  Embed your PDF viewer component here.
                  <br />
                  Use react-pdf or iframe to display the document.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PdfLibrary;
