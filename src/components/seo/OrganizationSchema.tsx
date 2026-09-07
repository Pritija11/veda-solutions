export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Veda Solutions Hub",
    description:
      "Veda Solutions Hub is a technology startup building AI-powered and modern digital solutions across AI, cloud, DevOps, software, data, and automation.",
    url: "https://vedasolutionshub.com",
    logo: "https://vedasolutionshub.com/images/logo.png",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },

    
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}