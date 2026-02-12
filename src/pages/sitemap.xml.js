/**
 * Dynamic sitemap for Google indexing.
 * Served at /sitemap.xml
 * Set NEXT_PUBLIC_SITE_URL in .env (e.g. https://onemobilitygroup.com) for production.
 */
function getBaseUrl(req) {
  if (typeof window !== "undefined") return window.location.origin;
  const host = req?.headers?.host || "";
  const protocol = req?.headers?.["x-forwarded-proto"] || "https";
  if (host) return `${protocol}://${host}`;
  return process.env.NEXT_PUBLIC_SITE_URL || "https://onemobilitygroup.com";
}

const staticPaths = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/service", priority: "0.9", changefreq: "monthly" },
  { path: "/service-details", priority: "0.8", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.8", changefreq: "monthly" },
  { path: "/portfolio-details", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/blog-details", priority: "0.7", changefreq: "weekly" },
  { path: "/faq", priority: "0.8", changefreq: "monthly" },
  { path: "/shop", priority: "0.8", changefreq: "weekly" },
  { path: "/shop-details", priority: "0.7", changefreq: "weekly" },
  { path: "/team", priority: "0.7", changefreq: "monthly" },
  { path: "/team-details", priority: "0.6", changefreq: "monthly" },
  { path: "/gceo-message", priority: "0.7", changefreq: "monthly" },
  { path: "/mission-vision", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy", priority: "0.7", changefreq: "monthly" },
  { path: "/terms", priority: "0.7", changefreq: "monthly" },
  { path: "/home-2", priority: "0.6", changefreq: "monthly" },
  { path: "/home-3", priority: "0.6", changefreq: "monthly" },
  { path: "/cart", priority: "0.5", changefreq: "monthly" },
  { path: "/checkout", priority: "0.5", changefreq: "monthly" },
];

function buildSitemapXml(baseUrl) {
  const lastmod = new Date().toISOString().split("T")[0];
  const urlEntries = staticPaths.map(
    ({ path, priority, changefreq }) =>
      `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res, req }) {
  const baseUrl = getBaseUrl(req).replace(/\/$/, "");
  const sitemap = buildSitemapXml(baseUrl);
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SitemapPage() {
  return null;
}
