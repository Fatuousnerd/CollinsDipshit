import './testimonials.scss';
import { Card } from "./Data.jsx";
import { FormatQuote } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext.jsx';

const Wrap = ({ item }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className="wrap" style={theme === 'light' ? {background: "rgba(210, 180, 140, .75)"} : {background: "rgba(121, 85, 72, .75)"}}>
                <div className="top">
                    <p>
                        "
                        <i>
                            {item.text}
                        </i>
                        "
                    </p>
                </div>

                <div className="bottom">
                    <div className="tt">
                        <h1>{item.author}</h1>
                        <h3>{item.position}</h3>
                    </div>
                    <FormatQuote className='fqt' />
                </div>
            </div>
        </>
    );
};

const Testimonials = () => {
    return (
        <>
            <div className="testimonials" id='testimonials'>
                <div className="title">
                    <h1>
                        Testimonials
                    </h1>
                    {/* <p>What Clients Say</p> */}
                </div>

                <div className="wrappers">
                    {Card.map(item => (
                        <Wrap key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Testimonials