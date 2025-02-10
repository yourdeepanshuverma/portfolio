import { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/style.css";
import "react-simple-toasts/dist/theme/dark.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ObserverProvider from "./helper/ObserverProvider";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

toastConfig({
  theme: "dark",
  position: "top-center",
  duration: 3000,
});

function App() {
  return (
    <ObserverProvider>
      <div className="font-poppins mx-auto px-8 md:max-w-6xl xl:px-0">
        <Header />
        <HeroSection />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </ObserverProvider>
  );
}

export default App;
