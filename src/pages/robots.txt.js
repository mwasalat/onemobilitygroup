/**
 * Dynamic robots.txt for crawlers. Points to sitemap.
 * Served at /robots.txt
 */
function getBaseUrl(req) {
  const host = req?.headers?.host || "";
  const protocol = req?.headers?.["x-forwarded-proto"] || "https";
  if (host) return `${protocol}://${host}`;
  return process.env.NEXT_PUBLIC_SITE_URL || "https://onemobilitygroup.com";
}

export async function getServerSideProps({ res, req }) {
  const baseUrl = getBaseUrl(req).replace(/\/$/, "");
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(robots);
  res.end();
  return { props: {} };
}

export default function RobotsTxtPage() {
  return null;
}
