import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  schemaMarkup,
  faqMarkup,
}) => {
  const location = useLocation();
  const baseUrl = "https://thebharatwork.com";
  const canonicalUrl = `${baseUrl}${location.pathname}${location.search}`;

  // Default values
  const defaultTitle = "BharatWork | Hire daily wage workers in minutes.";
  const defaultDescription = "BharatWork connects employers with verified daily wage workers in minutes using voice-first AI. No apps or internet required on the worker's end.";
  const defaultKeywords = "labour marketplace, daily wage workers, construction workers, hiring labour, blue collar jobs, worker hiring India, BharatWork";
  const defaultOgImage = "/src/assets/logo.png";

  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaOgImage = ogImage ? (ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`) : `${baseUrl}${defaultOgImage}`;

  // Generate Breadcrumbs Schema
  let breadcrumbSchema = null;
  const pathSegments = location.pathname.split("/").filter(Boolean);
  if (pathSegments.length > 0) {
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      }
    ];

    let currentUrl = baseUrl;
    pathSegments.forEach((segment, index) => {
      currentUrl += `/${segment}`;
      const cleanName = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": cleanName,
        "item": currentUrl,
      });
    });

    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement,
    };
  }

  return (
    <Helmet>
      {/* General Meta */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || metaTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      <meta property="og:image" content={metaOgImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || metaTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || metaDescription} />
      <meta name="twitter:image" content={twitterImage ? (twitterImage.startsWith("http") ? twitterImage : `${baseUrl}${twitterImage}`) : metaOgImage} />

      {/* Schema.org JSON-LD */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}

      {/* Breadcrumb List Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* FAQ Schema Markup */}
      {faqMarkup && faqMarkup.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqMarkup.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
