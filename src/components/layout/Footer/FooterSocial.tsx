import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    Icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    Icon: RiInstagramFill,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    Icon: FaFacebookF,
  },
];

const FooterSocial = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-light">Follow Us</h3>

      <div className="flex gap-4 items-center">
        {socialLinks.map((link, index) => {
          const { href, label, Icon } = link;

          return (
            <a
              key={index}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-full bg-light text-dark hover:bg-primary hover:text-light duration-300 grid place-items-center"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocial;
