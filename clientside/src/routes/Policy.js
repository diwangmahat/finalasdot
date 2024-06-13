import HomeHero from "../components/HomeHero";
import PolicyImg from "../assets/website/plainbg.jpg";
import Footer from "../components/Footer";
import PolicyDetail from "../components/PolicyDetail";

function Policy() {
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={PolicyImg}
        title="Privacy Policy"
        btnClass="hide"
      />
      <PolicyDetail />
      <Footer />
    </>
  );
}
export default Policy;
