import './App.css';

import City from './componants/City';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './componants/Home';
import Food from './componants/Food';
import Aurangabadcard from './componants/Aurangabadcard';
import Punecard from './componants/Punecard';
import Nashikcard from './componants/Nashikcard';
import Kolhapurcard from './componants/Kolhapurcard';
import Abdfood from './componants/Abdfood';
import Punefood from './componants/Punefood';
import Nashikfood from './componants/Nashikfood';
import Kolhapurfood from './componants/Kolhapurfood';
import Contact from './componants/Contact';
import About from './componants/About';



function App() {
  return (
    <div className="App ">
<Routes>
<Route path='/' element={<Home/>}/>
<Route path="/city" element={<City/>}/>
<Route path="/food" element={<Food/>}/>
<Route path="/Aurangabadcard" element={<Aurangabadcard/>}/>
<Route path="/Punecard" element={<Punecard/>}/>
<Route path="/Nashikcard" element={<Nashikcard/>}/>
<Route path="/Kolhapurcard" element={<Kolhapurcard/>}/>
<Route path="/Abdfood" element={<Abdfood/>}/>
<Route path="/Punefood" element={<Punefood/>}/>
<Route path="/Nashikfood" element={<Nashikfood/>}/>
<Route path="/Kolhapurfood" element={<Kolhapurfood/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/About" element={<About/>}/>


</Routes>



     


    </div>
  );
}

export default App;
