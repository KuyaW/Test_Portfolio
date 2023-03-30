import Header from "./parts/header";
import Hero from "./parts/hero";
import AboutMe from "./parts/aboutme";
import Works from "./parts/projects";
import Contact from "./parts/contact";
import Footer from "./parts/footer";
import './css/index.css';
import './assets/fa/css/font-awesome.min.css';

function App(){
    return (
       <>
            <Header />
            <main>
                <Hero />
                <AboutMe />
                <Works />
                <Contact />
            </main>
            <Footer />
       </>
    );
}

export default App ;