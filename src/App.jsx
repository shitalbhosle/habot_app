import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignUpComponent from "./components/SignUpComponent.jsx";
import Video from "./components/Video.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SignUpComponent />
      <Video />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
