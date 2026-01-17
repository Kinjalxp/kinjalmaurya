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
    title: "Forget the hype—here’s how to actually start an AI career in 2026.",
    date: "Coming Soon!",
    excerpt:
      "If you were waiting for the ‘perfect time’ to start an AI career, 2026 just showed up.",
    component: BlogPost2,
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "How the Right Prompt Can Change Everything",
    date: "Coming Soon!",
    excerpt: "A look at how precise prompts quietly control AI behavior.",
    component: BlogPost3,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
];
