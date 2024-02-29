import AboutMe from "./components/AboutMe";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ui/ContactMe";
import Resume from "./components/ui/Resume";

function App() {
  return (
    <div className="relative bg-primaryColor text-lightText">
      <Hero />
      <AboutMe />
      <Features />
      <Portfolio />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;
