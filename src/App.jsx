import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Utilities/ScrollToTop/ScrollToTop";
import CustomCursorManager from "./Utilities/CustomCursor/context/manager";
import CustomCursor from "./Utilities/CustomCursor";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import mainIMG from './assets/mainIMG.png'
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
      <CustomCursorManager>
        <Router>
        <ScrollToTop />
          <CustomCursor />
          <div className="top-0 z-20 sticky bg-white">
            <Navbar />
          </div>
          <div className='mx-10 md:mt-20 md:flex justify-center md:gap-20 items-center relative'>
            <div className='mt-52 md:mt-0 mb-52 md:mb-40 bg-white md:bg-transparent w-fit md:w-auto mx-auto md:mx-0 px-10 py-2 md:p-0 rounded-es-[40%] rounded-se-[40%]'>
              <h1 className='font-abel text-center md:text-start text-clampHeader'>IWAN</h1>
              <h1 className='font-abel text-center md:text-start text-clampHeader'>Interior</h1>
            </div>
            <div className=''>
              <img src={mainIMG} className='absolute -z-10 md:-z-0 left-1/2 md:left-0 top-1/2 md:top-0 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0  md:relative' alt="" />
            </div>
          </div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
          <br /><br />
          <Footer />
          <br /><br />
        </Router>
      </CustomCursorManager>
    </>
  )
}

export default App
