import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Record from "../components/record";
import WhoWeR from "../components/WhoWeR";
import Footer from "../components/Footer";
import ServiceLists from "../components/ServiceLists";
import WhyChoose from "../components/WhyChoose";
import Subscribe from "../components/Subscribe";
import ServiceButton from "../components/ServiceButton";
import CallInfo from "../components/callInfo";

function Home() {
  const heroImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImgs={heroImages}
        title="LET'S GROW TOGETHER"
        text="YOU HAVE BUSINESS & WE HAVE STRATEGY."
        btnClass="show"
        buttonText="GET STARTED"
        url="/contact"
        intervalTime={3000} // 3 seconds interval
      />
      <WhoWeR />
      <WhyChoose />
      <ServiceLists />
      <ServiceButton url="/Service" />
      <Record />
      <CallInfo />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
