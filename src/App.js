import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Explore from "./Pages/Explore";
import Details from "./Pages/Details";
import About from "./Pages/About";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='explore' element={<Explore/>}/>
                <Route exact path='explore/:slug' element={<Details/>}/>
                <Route exact path='about-us' element={<About/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;