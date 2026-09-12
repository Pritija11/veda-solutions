export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Veda Solutions Hub",
    description:
      "Veda Solutions Hub is a technology startup and IT solutions company building software, websites, mobile applications, AI solutions, and digital systems for modern businesses.",
    url: "https://vedasolutionshub.com",
    logo: "https://vedasolutionshub.com/images/logo-1.png",
    knowsAbout: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Artificial Intelligence",
      "Cloud Computing",
      "IT Consulting",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Imadole, Lalitpur",
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