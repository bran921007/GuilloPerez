import { BlogPost } from "@/components/blog/BlogPost";

// Define all possible blog post slugs
export function generateStaticParams() {
  return [
    { slug: "tendencias-arte-contemporaneo" },
    { slug: "impacto-ia-arte" },
    { slug: "nuevas-formas-expresion-digital" },
    { slug: "futuro-galerias-virtuales" },
    { slug: "1" },
    { slug: "2" },
    { slug: "3" }
  ];
}

export default function BlogPostPage() {
  return <BlogPost />;
}