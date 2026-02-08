import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";
import { SlDiamond } from "react-icons/sl";
import WhyUsCard from "./WhyUsCard";

const items = [
  {
    Icon: RiListSettingsLine,
    title: "Customization Features",
    description:
      "Easily personalize designs to match your unique style and preferences.",
  },
  {
    Icon: SlDiamond,
    title: "Premium Quality Fabric",
    description:
      "Crafted with high-grade materials for comfort, durability, and elegance.",
  },
  {
    Icon: LiaShippingFastSolid,
    title: "On Time Shipping",
    description:
      "Reliable delivery service that ensures your order arrives as scheduled.",
  },
  {
    Icon: MdSentimentSatisfiedAlt,
    title: "Amazing Customer Service",
    description:
      "Friendly and responsive support team dedicated to your satisfaction.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-dark text-light">
      <div className="ui-container py-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items?.map((item, index) => (
          <WhyUsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
