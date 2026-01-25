export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Justice" | "Social Issues" | "Infrastructure" | "Governance";
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "[Blog Title - Justice Topic Placeholder]",
    excerpt: "[Brief excerpt about a justice-related story. This is placeholder content for demonstration purposes.]",
    content: "[Full blog content will be added here. This placeholder represents a detailed article about justice-related issues covered by Vast Media TV News.]",
    category: "Justice",
    author: "[Author Name]",
    date: "2024-01-15",
    imageUrl: "/placeholder.svg",
    slug: "justice-topic-placeholder",
  },
  {
    id: "2",
    title: "[Blog Title - Social Issues Placeholder]",
    excerpt: "[Brief excerpt about social issues affecting the community. Placeholder content for layout demonstration.]",
    content: "[Full blog content about social issues will be added here.]",
    category: "Social Issues",
    author: "[Author Name]",
    date: "2024-01-12",
    imageUrl: "/placeholder.svg",
    slug: "social-issues-placeholder",
  },
  {
    id: "3",
    title: "[Blog Title - Infrastructure Update]",
    excerpt: "[Placeholder excerpt about infrastructure development and public amenities in the region.]",
    content: "[Detailed coverage of infrastructure issues and development projects.]",
    category: "Infrastructure",
    author: "[Author Name]",
    date: "2024-01-10",
    imageUrl: "/placeholder.svg",
    slug: "infrastructure-update-placeholder",
  },
  {
    id: "4",
    title: "[Blog Title - Governance Report]",
    excerpt: "[Placeholder content about governance, transparency, and administrative accountability.]",
    content: "[In-depth analysis of governance issues and administrative actions.]",
    category: "Governance",
    author: "[Author Name]",
    date: "2024-01-08",
    imageUrl: "/placeholder.svg",
    slug: "governance-report-placeholder",
  },
  {
    id: "5",
    title: "[Blog Title - Community Impact Story]",
    excerpt: "[Placeholder for a story about community impact and citizen engagement.]",
    content: "[Full story about how Vast Media TV News made a difference in the community.]",
    category: "Social Issues",
    author: "[Author Name]",
    date: "2024-01-05",
    imageUrl: "/placeholder.svg",
    slug: "community-impact-placeholder",
  },
  {
    id: "6",
    title: "[Blog Title - Legal Victory]",
    excerpt: "[Placeholder content about a legal victory or justice served through media intervention.]",
    content: "[Detailed account of the legal proceedings and outcome.]",
    category: "Justice",
    author: "[Author Name]",
    date: "2024-01-02",
    imageUrl: "/placeholder.svg",
    slug: "legal-victory-placeholder",
  },
];

export const blogCategories = ["All", "Justice", "Social Issues", "Infrastructure", "Governance"] as const;
