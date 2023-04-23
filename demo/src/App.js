
import './App.css';
import {Routes , Route ,BrowserRouter} from "react-router-dom";
import Routerpractie from './Components/Routerpractie';
import Home from './Components/Home';
import About from './Components/About';
import Listing from './Components/Listing';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Listing />}></Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path ="/antd-form" element ={<Routerpractie/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
