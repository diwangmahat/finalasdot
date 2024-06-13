import HomeHero from "../components/HomeHero";
import BlogImg from "../assets/website/blog.jpg";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogLists";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Blogs() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={BlogImg}
        title="Blogs"
        btnClass="hide"
      />
      <BlogList />
      <Subscribe />
      <Footer />
    </>
  );
}
export default Blogs;
