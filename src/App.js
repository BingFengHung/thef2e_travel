import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import MoreTopic from './components/MoreTopic/MoreTopic';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Header/> 
      <Routes>
        <Route path='/thef2e_travel/more/:topic' element={<MoreTopic/>}></Route>
        <Route path='/thef2e_travel' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
