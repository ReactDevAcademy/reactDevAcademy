import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About';
import Home from './Components/Home';
import NavbarComp from './SubComponents/Navbar';


// App.js file
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
