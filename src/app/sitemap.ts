import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const highPrioritySlugs = ["cena-krecenja-po-m2", "koliko-kosta-krecenje-stana", "krecenje-lokala-beograd", "krecenje-sa-materijalom-beograd"];
  const blogUrls = blogPosts.map((post) => ({
    url: `https://krecim.rs/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: highPrioritySlugs.includes(post.slug) ? 0.9 : 0.8,
  }));

  return [
    {
      url: "https://krecim.rs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://krecim.rs/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
