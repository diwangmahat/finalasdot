import Navbar from "../components/Navbar";
import AboutImg from "../assets/website/services.jpg";
import Footer from "../components/Footer";
import ServiceLists from "../components/ServiceLists";
import MoreServiceLists from "../components/MoreServiceLists";
import CallInfo from "../components/callInfo";
import Banner from "../components/Banner";

function Service() {
  return (
    <>
      <Navbar />
      <Banner
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
      />
      <ServiceLists />
      <MoreServiceLists />
      <CallInfo />
      <Footer />
    </>
  );
}

export default Service;
