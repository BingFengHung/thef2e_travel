import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Slideshow from './components/Slideshow/Slideshow';
import MoreTopic from './components/MoreTopic/MoreTopic';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Header/> 
      <Slideshow />
      <Routes>
        <Route path='/thef2e_travel/more/:topic' element={<MoreTopic/>}></Route>
        <Route path='/thef2e_travel' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
