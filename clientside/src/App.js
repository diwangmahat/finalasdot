import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Route, Routes } from "react-router-dom";
import Blogs from "./routes/Blogs";
import TermsNConditions from "./routes/TermsNConditons";
import Policy from "./routes/Policy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsNConditions />} />
        <Route path="/policy" element={<Policy />} />

        {/* <Navbar />
      <Home />
      <Destination />
      <Trip />
      <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
