export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  imageUrl: string;
}

export const mockGalleryItems: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #1 - Placeholder]",
    category: "Community Impact",
    date: "2024-01-15",
  },
  {
    id: "2",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #2 - Placeholder]",
    category: "Infrastructure",
    date: "2024-01-12",
  },
  {
    id: "3",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #3 - Placeholder]",
    category: "Justice",
    date: "2024-01-10",
  },
  {
    id: "4",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #4 - Placeholder]",
    category: "Rural Development",
    date: "2024-01-08",
  },
  {
    id: "5",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #5 - Placeholder]",
    category: "Women Empowerment",
    date: "2024-01-05",
  },
  {
    id: "6",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #6 - Placeholder]",
    category: "Tribal Development",
    date: "2024-01-03",
  },
  {
    id: "7",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #7 - Placeholder]",
    category: "COVID Relief",
    date: "2024-01-01",
  },
  {
    id: "8",
    imageUrl: "/placeholder.svg",
    caption: "[Caption: Description of social impact image #8 - Placeholder]",
    category: "Public Amenities",
    date: "2023-12-28",
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "[Citizen Name]",
    location: "[Location, State]",
    quote: "[Placeholder testimonial: How Vast Media TV News helped resolve my issue with the administration. Their dedication to justice is commendable.]",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "[Citizen Name]",
    location: "[Location, State]",
    quote: "[Placeholder testimonial: Thanks to the follow-up by Vast Media, our village finally got proper roads and water supply.]",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "[Citizen Name]",
    location: "[Location, State]",
    quote: "[Placeholder testimonial: A true voice of the people. They covered our story when no one else would listen.]",
    imageUrl: "/placeholder.svg",
  },
];

export const galleryCategories = [
  "All",
  "Community Impact",
  "Infrastructure",
  "Justice",
  "Rural Development",
  "Women Empowerment",
  "Tribal Development",
  "COVID Relief",
  "Public Amenities",
] as const;
