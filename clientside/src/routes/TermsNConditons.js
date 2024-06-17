import TermImg from "../assets/website/plainbg.jpg";
import Footer from "../components/Footer";
import Terms from "../components/Terms";
import Banner from "../components/Banner";

function TermsNConditions() {
  return (
    <>
      <Banner
        cName="hero-mid"
        heroImg={TermImg}
        title="Terms and Conditions"
      />
      <Terms />
      <Footer />
    </>
  );
}
export default TermsNConditions;
