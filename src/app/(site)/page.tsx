import Banner from "./home/Banner";
import Categories from "./home/Categories";
import HowItWorks from "./home/HowItWorks";
import NewArrivals from "./home/NewArrivals";
import OurExperts from "./home/OurExperts";
import Reviews from "./home/Reviews";
import WhyUs from "./home/WhyUs";

const Home = () => {
  return (
    <>
      <Banner />
      <WhyUs />
      <Categories />
      <HowItWorks />
      <OurExperts />
      <NewArrivals />
      <Reviews />
    </>
  );
};

export default Home;
