import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Servic from './pages/Servic'
import Navbar from './pages/Navbar'
import{BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/home" element={<Home/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/contact" element={<Contact/>}></Route>
        <Route  path="/servic" element={<Servic/>}></Route>
        <Route  path="/navbar" element={<Navbar/>}></Route>
      </Routes>
      
      </BrowserRouter>
      {/* <About/>
      <Home/>
      <Contact/> */}

     
    </div>
  );
}

export default App;
