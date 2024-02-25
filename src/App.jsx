import AboutMe from "./components/AboutMe";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ui/ContactMe";

function App() {
  return (
    <div className="relative bg-primaryColor text-lightText">
        <Hero />
        <AboutMe/>
        <Features/>
        <Portfolio/>
        <ContactMe/>
    </div>
  );
}

export default App;
