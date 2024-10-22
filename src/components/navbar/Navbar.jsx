import './navbar.scss';
import { DarkMode } from '@mui/icons-material';
import ThemeToggle from '../../utils/ThemeTogggle';
import { ThemeContext } from '../../utils/ThemeContext';
import { useContext } from 'react';
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Sidebar />
            <div className="navbar" style={theme === 'light' ? { background: "rgba(255, 255, 255, .25)" } : { background: "rgba(0, 0, 0, .25)" }}>
                <div className="logo">
                    <a href="/">
                        <img src="./hero.png" alt="" />
                    </a>
                </div>

                <div className="navi">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>

                <div className="right">
                    <ThemeToggle />
                </div>
            </div>
        </>
    )
}

export default Navbar