import "./carousel.scss";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        id: 1,
        image: "./hero.png",
    },
    {
        id: 2,
        image: "./people.webp",
    },
    {
        id: 3,
        image: "./wallpaper2.jfif",
    },
    {
        id: 4,
        image: "./wallpaper3.jfif",
    },
    {
        id: 5,
        image: "./wallpaper4.jfif",
    },
];

const Single = ({ item }) => {
    const ref = useRef()

    return (
        <div className="content">
            <img src={item.image} alt="" />
        </div>
    )
}

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        fade: true,
        // cssEase: "linear"
    }

    return (
        <div className="carousel">
            <div className="contentHolder">
                <Slider {...settings}>
                    {content.map(item => (
                        <Single item={item} key={item.id} />
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default Carousel