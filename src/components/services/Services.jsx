import './services.scss';
import { Container } from "./Data";
import { CloseFullscreen, OpenInFullOutlined } from '@mui/icons-material';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contain = ({ item }) => {
    const containerRef = useRef();
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        { open === false ? setOpen(true) : setOpen(false) };
        console.log(open);

    };

    const cardVariants = {
        initial: {
            x: 200,
        },
        animate: {
            x: 0,
            transition: {
                duration: .05,
            }
        },
    };

    return (
        <>
            <motion.div className={open ? "open" : "container"} ref={containerRef} initial="initial" whileInView="animate" variants={cardVariants}>
                {open && <button onClick={handleOpen} className='close'><CloseFullscreen /></button>}
                <motion.div className="icon" variants={cardVariants}>
                    {item.icon}
                </motion.div>
                <motion.div className="txt" variants={cardVariants}>
                    <motion.h1>{item.title}</motion.h1>
                    {!open && <p className='desc'>{item.desc}</p>}
                    {open && <p className='description'>{item.description}</p>}
                    {!open && <button onClick={handleOpen}>Learn More <OpenInFullOutlined /></button>}
                </motion.div>
            </motion.div>
        </>
    );
};

const Services = () => {
    
    const textVariants = {
        initial: {
            y: 200,
        },
        animate: {
            y: 0,
            transition: {
                duration: .25,
            }
        },
    };

    return (
        <>
            <div className="services" id='services'>

                <div className="containers">
                    {Container.map(item => (
                        <Contain item={item} key={item.id} />
                    ))}
                </div>

                <motion.div className="info" variants={textVariants} initial="initial" whileInView="animate">
                    <motion.h3 variants={textVariants}>My Services</motion.h3>
                    <motion.h1 variants={textVariants}>We Create Amazing Shit</motion.h1>
                    <motion.div variants={textVariants}>
                        <motion.p variants={textVariants}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugit id, excepturi nesciunt accusamus recusandae distinctio amet dolorum ullam, maiores soluta iure commodi maxime ab cum ex minima consectetur minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione veritatis quis quas rerum blanditiis molestiae quo deleniti quam ipsum? Ducimus amet illo hic nisi porro qui, odio fuga ut!</motion.p>
                        <motion.p variants={textVariants}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quasi placeat dolorum assumenda suscipit reiciendis dolore debitis ut nesciunt magni velit fugit voluptas accusantium quia nam, aut doloribus deserunt ipsum!</motion.p>
                    </motion.div>
                    <motion.a href="">
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.a>
                </motion.div>

            </div>
        </>
    )
}

export default Services