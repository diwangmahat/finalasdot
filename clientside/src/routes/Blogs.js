import Banner from "../components/Banner";
import BlogImg from "../assets/website/blog.jpg";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogLists";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Blogs() {
  return (
    <>
      <Navbar />
      <Banner
        cName="hero-mid"
        heroImg={BlogImg}
        title="Blogs"
      />
      <BlogList />
      <Subscribe />
      <Footer />
    </>
  );
}
export default Blogs;
