import { Id } from "@/types";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import clsx from "clsx";

interface ExpertCardProps {
  expert: {
    id: Id;
    name: string;
    image: string;
    designation: string;
  };
}

const socialLinks = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: FaTwitter,
    position: "left-3",
    delay: "delay-10",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    Icon: RiInstagramFill,
    position: "left-14",
    delay: "delay-60",
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    Icon: FaFacebookF,
    position: "left-25",
    delay: "delay-110",
  },
];

const ExpertCard = ({ expert }: ExpertCardProps) => {
  const { name, designation, image } = expert || {};

  return (
    <article className="group">
      <div className="overflow-hidden relative z-0">
        <Image
          width={800}
          height={500}
          src={image}
          alt={name}
          className="aspect-8/5 object-cover rounded-t"
        />

        {socialLinks.map(({ href, label, Icon, position, delay }, idx) => (
          <div
            key={idx}
            className={clsx(
              "absolute -bottom-full group-hover:bottom-4 duration-300",
              position,
              delay
            )}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}'s profile on ${label}`}
              className="size-8 sm:size-9 rounded-full bg-secondary hover:bg-dark hover:text-light duration-300 sm:text-lg grid place-items-center"
            >
              <Icon />
            </a>
          </div>
        ))}
      </div>

      <div
        className={clsx(
          "w-full h-16 sm:h-18 p-3 ps-4 rounded-b bg-light-light"
        )}
      >
        <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
        <p className="ps-px mt-px text-dark-light text-xs sm:text-sm">
          {designation}
        </p>
      </div>
    </article>
  );
};

export default ExpertCard;
