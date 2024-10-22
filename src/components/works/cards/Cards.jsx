import { Data } from "./data.jsx";
import './Junk.txt'
import './cards.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const One = ({ item }) => {

    const [open, setOpen] = useState(false);

    const cardRef = useRef();

    const handleOpen = () => {
        setOpen(true)
        console.log(open);
    };

    const handleClose = () => {
        { open ? setOpen(false) : setOpen(true) }
        console.log(open);

    };

    const cardVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: .5,
                delayChildren: .5,
            }
        },
    };

    return (
        <>
            {open && <Close onClick={handleClose} className="closer" />}
            <motion.button onClick={handleOpen}>
                <motion.div className={!open ? "card" : "detail"}>
                    <motion.img src={item.image} alt="" />
                    <motion.div className="text">
                        <motion.h1>{item.title}</motion.h1>
                        <motion.p className="description">{item.description}</motion.p>
                        <motion.p className="desc">{item.desc}</motion.p>
                    </motion.div>
                </motion.div>
            </motion.button>
        </>
    )
};

const Cards = () => {

    const settings = {
        // dots: true,
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        // cssEase: "linear"
    }

    const scrollRef = useRef(null);

    const handleLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 100; // Adjust the value to control how much it scrolls
        };
    };

    const handleRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 100; // Adjust the value to control how much it scrolls
        };
    };

    const cardVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: .5,
                delayChildren: .5,
            }
        },
    };

    return (
        <>
            <motion.div className="cards" ref={scrollRef} variants={cardVariants} initial="initial" whileInView="animate">
                {/* <Slider {...settings}> */}
                {Data.map(item => (
                    <One item={item} key={item.id} />
                ))}
                {/* </Slider> */}
            </motion.div>
            <div className="scl">
                <button onClick={handleLeft}><ArrowLeft /></button>
                <button onClick={handleRight}><ArrowRight /></button>
            </div>
        </>
    )
}

export default Cards