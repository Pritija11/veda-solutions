export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Veda Solutions Hub",
    description:
      "Veda Solutions Hub is a technology startup building intelligent digital systems across AI, software, cloud and data.",
    url: "https://vedasolutionshub.com",
    logo: "https://vedasolutionshub.com/images/logo.png",
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