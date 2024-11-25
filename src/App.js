import Header from './Component/Header';
import Intro from './Component/Intro';
import About from './Component/About';
import Resume from './Component/Resume';
import Portfolio from './Component/Portfolio';
import CallToAction from './Component/CallToAction';
import Services from './Component/Services';
import Stats from './Component/Stats';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
// import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      {/* <CallToAction /> */}
      <Services />
      <Stats />
      <Contact />
      <Footer />

      {/* <div id="preloader">
        <div id="loader"></div>
      </div> */}
    </div>
  );
}

export default App;
