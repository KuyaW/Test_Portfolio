import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "../parts/aboutme";
import Works from "../parts/projects";
import Contact from "../parts/contact";



const ReactRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/AboutMe" element={<AboutMe />}/>
                <Route path="/Projects" element={<Works />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default ReactRouter
