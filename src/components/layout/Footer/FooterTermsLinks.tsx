import Link from "next/link";

const termsLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Return Policy",
  "Exchange Policy",
];

const FooterTermsLinks = () => {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-light">Terms & Conditons</h3>

      <div className="grid gap-1 text-sm">
        {termsLinks.map((label) => (
          <Link key={label} href="/terms" className="w-max animated-underline">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterTermsLinks;
