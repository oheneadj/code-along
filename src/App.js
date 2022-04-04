import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/navbar/Navbar"


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App