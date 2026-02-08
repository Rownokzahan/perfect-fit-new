import HowItWorksCard from "./HowItWorksCard";

const steps = [
  {
    step: 1,
    title: "Pick A Dress",
    description:
      "Browse through our collection and pick the dress that suits your style.",
  },
  {
    step: 2,
    title: "Customize it's Design",
    description:
      "Personalize your dress by selecting your preferred fabric, neckline etc.",
  },
  {
    step: 3,
    title: "Give your Measurements",
    description:
      "Tell us your measurements to ensure the perfect fit for your dress.",
  },
  {
    step: 4,
    title: "Recive The Dress",
    description: "Receive your custom-made dress and cherish the perfect fit.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-secondary">
      <div className="ui-container py-16">
        <h3 className="mb-10 text-3xl font-semibold text-center">How it works</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {steps?.map((item) => (
            <HowItWorksCard key={item.step} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
