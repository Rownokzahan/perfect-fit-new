import { IconType } from "react-icons";

interface WhyUsCardProps {
  item: {
    title: string;
    description: string;
    Icon: IconType;
  };
}

const WhyUsCard = ({ item }: WhyUsCardProps) => {
  const { title, description, Icon } = item;

  return (
    <div className="border border-secondary text-center py-8 px-4">
      <div className="shrink-0 mx-auto w-fit">
        <Icon className="text-secondary text-2xl lg:text-3xl xl:text-4xl" />
      </div>

      <h3 className="mt-2 font-semibold text-secondary text-sm lg:text-base xl:text-lg">
        {title}
      </h3>

      <p className="hidden xl:block mt-2 text-dark-light text-sm">{description}</p>
    </div>
  );
};

export default WhyUsCard;
