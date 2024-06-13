import react from "react";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import ProjectContent from "../components/ProjectContent";

function Projects() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Project"
        btnClass="hide"
      />
      <ProjectContent />
      <Footer />
    </>
  );
}
export default Projects;
