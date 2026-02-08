import Image from "next/image";

interface AuthViewHeaderProps {
  title: string;
  subtitle: string;
}

const AuthViewHeader = ({ title, subtitle }: AuthViewHeaderProps) => {
  return (
    <div className="w-full min-h-32 sm:aspect-9/3 rounded-t relative bg-linear-to-tr from-black/50 to-black/10">
      <Image
        src="/images/auth-image.webp"
        alt="Authentication background"
        fill
        className="size-full rounded-t object-cover object-center mix-blend-multiply"
      />

      <div className="absolute bottom-4 px-6 z-10 text-white">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-uiBlack-light text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthViewHeader;
