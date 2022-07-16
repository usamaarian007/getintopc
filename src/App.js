 import './App.css';
 import background from "../src/background.jpg" 
 import Mission from './Components/Mission/Mission';
 import About from './Components/About/About';
 import Contact from './Components/Contact/Contact';
 import Privacy from './Components/Privacy/Privacy';
 import Report from './Components/Report/Report';
 import Dmca from './Components/DMCA/dmca';
 import Advertise from './Components/Advertise/Advertise';
 import Donate from './Components/Donate/Donate';
 import Categories from './Components/Categories/Categories';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";  

function App() {
 
    const myStyle={
        backgroundImage: `url(${background})` ,
        height:'auto',
        marginTop:'-50px',  
        width: 'fit-content', 
        paddingBottom: '20px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <>
        <div style={myStyle}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/Mission" element={<Mission />} />
            </Routes>
            <Routes>
              <Route exact path="/About" element={<About />} />
            </Routes>
            <Routes>
              <Route exact path="/Contact" element={<Contact />} />
            </Routes>
            <Routes>
              <Route exact path="/Privacy" element={<Privacy />} />
            </Routes>
            <Routes>
              <Route exact path="/Report" element={<Report />} />
            </Routes>
            <Routes>
              <Route exact path="/DMCA" element={<Dmca />} />
            </Routes>
            <Routes>
              <Route exact path="/Advertise" element={<Advertise />} />
            </Routes>
            <Routes>
              <Route exact path="/Donate" element={<Donate />} />
            </Routes>
            <Routes>
              <Route exact path="/Categories" element={<Categories />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }

   
export default App;