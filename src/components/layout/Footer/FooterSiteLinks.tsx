import Link from "next/link";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "Dresses", href: "/dresses" },
  { label: "Custom Dress", href: "/custom-dress" },
  { label: "Contact Us", href: "/contact" },
];

const FooterSiteLinks = () => {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-light">Site Links</h3>

      <div className="grid gap-1 text-sm">
        {siteLinks.map(({ label, href }) => (
          <Link key={href} href={href} className="w-max animated-underline">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterSiteLinks;
