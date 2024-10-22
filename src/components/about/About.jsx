import { Instagram, Mail, Phone, Telegram, X } from '@mui/icons-material';
import './about.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import {motion} from "framer-motion";

const About = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const imageVariants = {
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration:2, 
                delay:.05,
            },
        },
    };
    
    const textVariants = {
        initial:{
            opacity:0,
            y:400,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:2, 
                delay:1,
            },
        },
    };

    return (
        <>
            <div className="about" id='about'>

                <motion.div className="texts" variants={textVariants} initial="initial" whileInView="animate">
                    <motion.div className="title" variants={textVariants}>
                        <motion.h1 variants={textVariants}>About Me</motion.h1>
                    </motion.div>

                    <motion.div className="desc" variants={textVariants}>
                        <motion.p variants={textVariants}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem reprehenderit delectus, incidunt, quidem maiores culpa nemo provident praesentium excepturi facilis illum voluptatibus repellendus neque rem. Officiis nisi voluptate explicabo error?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem reprehenderit delectus, incidunt, quidem maiores culpa nemo provident praesentium excepturi facilis illum voluptatibus repellendus neque rem. Officiis nisi voluptate explicabo error?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem reprehenderit delectus, incidunt, quidem maiores culpa nemo provident praesentium excepturi facilis illum voluptatibus repellendus neque rem. Officiis nisi voluptate explicabo error?
                        </motion.p>
                        <motion.a href="" variants={textVariants}>
                            <motion.button variants={textVariants}>Download CV</motion.button>
                        </motion.a>
                    </motion.div>

                    <motion.div className="social" variants={imageVariants} initial="initiaal" whileInView="animate">
                        <motion.ul variants={imageVariants}>
                            <motion.li variants={imageVariants}><motion.a variants={imageVariants} href="https://x.com"><X className='X' /></motion.a></motion.li>
                            <motion.li variants={imageVariants}><motion.a variants={imageVariants} href="https://instagram.com"><Instagram className='IG' /></motion.a></motion.li>
                            <motion.li variants={imageVariants}><motion.a variants={imageVariants} href="https://telegram.com"><Telegram className='TG' /></motion.a></motion.li>
                            <motion.li variants={imageVariants}><motion.a variants={imageVariants} href="mailto:"><Mail className='ML' /></motion.a></motion.li>
                            <motion.li variants={imageVariants}><motion.a variants={imageVariants} href=""><Phone className='PN' /></motion.a></motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>

                <motion.div className="pic" variants={imageVariants} initial="initial" whileInView="animate" style={theme === 'light' ? { backgroundImage: "linear-gradient(80deg, transparent 25%, rgba(210, 180, 140, .5) 50%, rgba(139, 69, 19, .25) 85%), url('./hero.png')", backgroundSize: "cover", backgroundPosition: "center" } : { backgroundImage: "linear-gradient(80deg, transparent 25%, rgba(121, 85, 72, .75) 50%, rgba(62, 39, 35, 0.25) 85%), url('./hero.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    {/**/}
                </motion.div>
            </div>
        </>
    )
}

export default About