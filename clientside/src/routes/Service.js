import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/website/services.jpg";
import Footer from "../components/Footer";
import ServiceLists from "../components/ServiceLists";
import MoreServiceLists from "../components/MoreServiceLists";
import CallInfo from "../components/callInfo";

function Service() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <ServiceLists />
      <MoreServiceLists />
      <CallInfo />
      <Footer />
    </>
  );
}

export default Service;
