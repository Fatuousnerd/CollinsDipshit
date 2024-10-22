import './hero.scss';
import Navbar from '../navbar/Navbar';
import Carousel from "./carousel/Carousel";
import { ArrowRight, ChevronRight, LocalFlorist } from "@mui/icons-material";
import {motion, transform} from "framer-motion";

const textVariants = {
  initial:{
    opacity:0,
    x:-100,
  },
  animation:{
    opacity:1,
    x:0,
    transition:{
      duration:.5,
      staggerChild:.5,
    }
  },
}

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero" id='home'>
        <Carousel />
        <motion.div className="words" variants={textVariants} initial="initial" whileInView="animation">
          <motion.h1 variants={textVariants}>
            Time To Travel
          </motion.h1>
          <motion.p variants={textVariants}>
            Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
            Eum quidem sit itaque quisquam ex ab,
            saepe distinctio reiciendis, aliquid earum,
            temporibus fuga placeat in totam est repellat laudantium commodi enim?
          </motion.p>
        </motion.div>

        <div className="bottom">
          
          <div className="holder">
            <div className="icon">
              <LocalFlorist className='fl'/>
            </div>

            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem, iure voluptatibus blanditiis consectetur dicta quod temporibus error iusto quae rerum? 
              </p>
              {/* <a href="">Learn More <ArrowRight/></a> */}
            </div>
          </div>
          
          <div className="holder">
            <div className="icon">
              <LocalFlorist className='fl'/>
            </div>

            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem, iure voluptatibus blanditiis consectetur dicta quod temporibus error iusto quae rerum? 
              </p>
              {/* <a href="">Learn More <ArrowRight/></a> */}
            </div>
          </div>
          
          <div className="holder">
            <div className="icon">
              <LocalFlorist className='fl'/>
            </div>

            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem, iure voluptatibus blanditiis consectetur dicta quod temporibus error iusto quae rerum? 
              </p>
              {/* <a href="">Learn More <ArrowRight/></a> */}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero