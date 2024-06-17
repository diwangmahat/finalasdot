import react from "react";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectContent from "../components/ProjectContent";
import Banner from "../components/Banner";

function Projects() {
  return (
    <>
      <Navbar />
      <Banner
        cName="hero-mid"
        heroImg={AboutImg}
        title="Project"
      />
      <ProjectContent />
      <Footer />
    </>
  );
}
export default Projects;
