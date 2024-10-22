import { Instagram, Mail, Phone, Telegram, X } from '@mui/icons-material';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <div className="footer">
                
                <div className="navi">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div className="socials">
                    <ul>
                        <li><a href=""><X className='X'/></a></li>
                        <li><a href=""><Instagram className='IG'/></a></li>
                        <li><a href=""><Telegram className='TG'/></a></li>
                        <li><a href="mailto:"><Mail className='ML'/></a></li>
                        <li><a href=""><Phone className='PN'/></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer