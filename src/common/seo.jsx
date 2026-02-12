import Head from "next/head";
import { useRouter } from "next/router";

const defaultDescription = "One Mobility Group delivers reliable, affordable, and sustainable transportation solutions—auto rental, taxi, public & school transport, and technology—for smarter cities worldwide.";

const SEO = ({ pageTitle, pageDescription, canonicalPath, noIndex }) => {
  const router = useRouter();
  const baseUrl = typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || "https://onemobilitygroup.com");
  const path = canonicalPath ?? router?.pathname ?? "";
  const canonical = path ? `${baseUrl}${path === "/" ? "" : path}` : null;

  const title = pageTitle ? `${pageTitle} | One Mobility Group` : "One Mobility Group - Transportation & Mobility Solutions";
  const description = pageDescription || defaultDescription;
  const robots = noIndex ? "noindex, follow" : "index, follow";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="robots" content={robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {canonical && <meta property="og:url" content={canonical} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
};

export default SEO;
