import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import About from "../about/About";
import Works from "../works/Works";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Footer from "../footer/Footer";

const Main = () => {
    return (
        <>
            <Hero />
            <About />
            <Works />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default Main