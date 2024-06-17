import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ContactImg from "../assets/website/contact-us.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Banner
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
