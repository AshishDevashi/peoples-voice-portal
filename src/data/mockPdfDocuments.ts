export interface PdfDocument {
  id: string;
  title: string;
  category: "Notices" | "Reports" | "Letters" | "Official Documents";
  date: string;
  description: string;
  fileUrl: string;
  thumbnailUrl: string;
}

export const mockPdfDocuments: PdfDocument[] = [
  {
    id: "1",
    title: "[Official Notice - Placeholder Title #1]",
    category: "Notices",
    date: "2024-01-15",
    description: "[Description of the official notice document - Placeholder content]",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "2",
    title: "[Investigation Report - Placeholder Title #2]",
    category: "Reports",
    date: "2024-01-12",
    description: "[Description of the investigation report - Placeholder content]",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "3",
    title: "[Official Letter - Placeholder Title #3]",
    category: "Letters",
    date: "2024-01-10",
    description: "[Description of the official correspondence - Placeholder content]",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "4",
    title: "[Government Document - Placeholder Title #4]",
    category: "Official Documents",
    date: "2024-01-08",
    description: "[Description of the government document - Placeholder content]",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "5",
    title: "[Public Notice - Placeholder Title #5]",
    category: "Notices",
    date: "2024-01-05",
    description: "[Description of the public notice - Placeholder content]",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "6",
    title: "[Annual Report - Placeholder Title #6]",
    category: "Reports",
    date: "2024-01-02",
    description: "[Description of the annual report - Placeholder content]",
    fileUrl: "#",
    thumbnailUrl: "/placeholder.svg",
  },
];

export const pdfCategories = ["All", "Notices", "Reports", "Letters", "Official Documents"] as const;
