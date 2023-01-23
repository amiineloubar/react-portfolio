import About from "../components/About";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import MyWorks from "../components/MyWorks";
import NavBar from "../components/NavBar";
import Services from "../components/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <About />
      <Services />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;