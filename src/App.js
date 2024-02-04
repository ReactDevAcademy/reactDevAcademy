import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About';
import Home from './Components/Home';
import Footer from './SubComponents/Footer';
import Navbar from './SubComponents/Navbar';
import NavbarComp from './SubComponents/Navbar';
import Section2 from './SubComponents/Section2';
import Slider from './SubComponents/Slider';


// App.js file
function App() {
  return (
    <div className="">
        <Navbar/>
        <Slider/>
        <Section2/>
        <Footer/>
    </div>
  );
}

export default App;
