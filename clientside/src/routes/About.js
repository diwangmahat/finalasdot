import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/website/about-us.jpg";
import WhoWeR from "../components/WhoWeR";
import WhyChoose from "../components/WhyChoose";
import Subscribe from "../components/Subscribe";
import CallInfo from "../components/callInfo";

function About() {
  return (
    <>
      <Navbar />
      <Banner
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
      />
      <AboutUs />
      <WhoWeR hideDiscoverMore={true} />
      <WhyChoose />
      <CallInfo />
      <Subscribe />
      <Footer />
    </>
  );
}

export default About;
