import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Parallax from "./components/parallax ";
import Gallery from "./components/gallery";
// import { Features } from "./components/features";
// import { Services } from "./components/services";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import ContactForm from "./components/contactForm";
// import { Counter } from "./components/counter";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      {/* <Counter /> */}
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Gallery />
      <Parallax>
        {/* <h1>PETROVAC</h1>
        <p>Dodjite da uživamo zajedno!</p> */}
      </Parallax>
      <Contact data={landingPageData.Contact} />

      {/* ODAVDE NE */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Services data={landingPageData.Services} />
      />
      <ContactForm /> */}
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
    </div>
  );
};

export default App;
