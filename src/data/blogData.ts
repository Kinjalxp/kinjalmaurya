import BlogPost1 from "../components/blog-posts/BlogPost1";

import BlogPost2 from "../components/blog-posts/BlogPost2";
import BlogPost3 from "../components/blog-posts/BlogPost3";

export const blogPosts = [
  {
    id: 1,
    title: "Why does data matter more than algorithms?",
    date: "January 16, 2026",
    excerpt:
      "Learn why quality of data is more important than the complexity of the algorithm",
    component: BlogPost1,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    date: "January 8, 2025",
    excerpt:
      "Discover how Tailwind's utility-first approach can speed up your development workflow.",
    component: BlogPost2,
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    date: "January 5, 2025",
    excerpt:
      "Best practices and architectural patterns for creating applications that grow with your needs.",
    component: BlogPost3,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
];
