// import Cleaning from "../components/Cleaning";
import ChooseUs from "../components/ChooseUs";
import CleaningServices from "../components/CleaningServices";
import Header from "../components/Header";
import Faq from "../components/home/Faq";
import Partners from "../components/home/Partners";
import Statistics from "../components/home/Statistics";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <ChooseUs />
      <CleaningServices />
      <Testimonial />
      <Partners />
      <Faq />
      <Statistics />
    </div>
  );
};

export default Home;
