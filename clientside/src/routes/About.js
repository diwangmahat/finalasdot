import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
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
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <WhoWeR />
      <WhyChoose />
      <CallInfo />
      <Subscribe />
      <Footer />
    </>
  );
}

export default About;
