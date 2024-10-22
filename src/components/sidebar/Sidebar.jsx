import "./sidebar.scss"
import Links from "./Links/Links.jsx"
import ToggleButton from "./toggleButton/ToggleButton.jsx"
import { useContext, useState } from "react"
import { motion } from "framer-motion"
import { ThemeContext } from "../../utils/ThemeContext.jsx"

const variants = {
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay:.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    },
};

const Sidebar = () => {

    const [open,setOpen] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants} style={theme === 'light' ? {background:"rgba(255, 255, 255, .7)"} : {background:"rgba(0, 0, 0, .7)"}}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
};

export default Sidebar;