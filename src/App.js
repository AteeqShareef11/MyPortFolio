import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
<>
  <ToastContainer/>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Testimonials/>
  <Contact/>
  <Footer/>
</>
  );
}

export default App;
