import PolicyImg from "../assets/website/plainbg.jpg";
import Footer from "../components/Footer";
import PolicyDetail from "../components/PolicyDetail";
import Banner from "../components/Banner";

function Policy() {
  return (
    <>
      <Banner
        cName="hero-mid"
        heroImg={PolicyImg}
        title="Privacy Policy"
      />
      <PolicyDetail />
      <Footer />
    </>
  );
}
export default Policy;
