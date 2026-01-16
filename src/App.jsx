import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Exercise from "./components/Exercise";
import Calculators from "./components/Calculators";
import Diet from "./components/Diet";
import About from "./components/About";
import Owner from "./components/Owner";
import Gallery from "./components/Gallery";
import BottomFooter from "./components/BottomFooter";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Exercise />
      <Calculators />
      <Diet />
      <About/>
      <Owner />
      <Gallery />
      <BottomFooter />
    </>
  );
}

export default App;
