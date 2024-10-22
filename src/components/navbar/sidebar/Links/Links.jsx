import { motion } from "framer-motion";
import ThemeToggle from "../../../utils/ThemeTogggle";

const variants = {
    open: {
        transition: {
            staggerChildren: .1,
        },
    },
    closed: {
        transition: {
            staggerChildren: .05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {

    const items = ["About", "Pages", "Merch", "Live", "Contact", "Faqs"];


    return (
        <motion.div className="links" variants={variants}>
            <motion.a href="/" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>Home</motion.a>
            {items.map(item => (
                <motion.a href={`/${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>{item}</motion.a>
            ))}
            <motion.div className="tgl" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>
                <ThemeToggle />
            </motion.div>
        </motion.div>
    )
}

export default Links