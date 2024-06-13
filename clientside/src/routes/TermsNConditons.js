import HomeHero from "../components/HomeHero";
import TermImg from "../assets/website/plainbg.jpg";
import Footer from "../components/Footer";
import Terms from "../components/Terms";

function TermsNConditions() {
  return (
    <>
      <HomeHero
        cName="hero-mid"
        heroImg={TermImg}
        title="Terms and Conditions"
        btnClass="hide"
      />
      <Terms />
      <Footer />
    </>
  );
}
export default TermsNConditions;
