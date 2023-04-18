import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pizzatypes from "./components/Pizzatypes";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <About/>
    <Pizzatypes/>
    <Footer/>
   
    </div>
  );
}

export default App;
