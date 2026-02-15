import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-2xl font-semibold whitespace-nowrap space-x-2"
      prefetch={false}
    >
      <span>Perfect</span>
      <span>Fit</span>
    </Link>
  );
};

export default Logo;
