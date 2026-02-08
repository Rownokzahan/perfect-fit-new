interface HowItWorksCardProps {
  item: {
    step: number;
    title: string;
    description: string;
  };
}

const HowItWorksCard = ({ item }: HowItWorksCardProps) => {
  const { step, title, description } = item;

  return (
    <article className="p-6 rounded bg-light overflow-hidden group">
      <div className="size-12 grid place-items-center relative z-0">
        <div className="size-full rounded-full border border-white bg-dark grid place-items-center">
          <span className="text-light text-xl font-medium">{step}</span>
        </div>
        <div className="size-11.5 -z-10 rounded-full bg-dark absolute group-hover:size-300 duration-700" />
      </div>

      <div className="mt-2 ps-1 group-hover:text-light duration-300 space-y-1 text-dark relative z-0">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="opacity-60 font-medium text-pretty">{description}</p>
      </div>
    </article>
  );
};

export default HowItWorksCard;
