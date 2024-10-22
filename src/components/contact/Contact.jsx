import { useContext } from 'react';
import './contact.scss';
import { ThemeContext } from '../../utils/ThemeContext';
import { Instagram, Mail, Phone, Telegram, X } from '@mui/icons-material';

const Contact = () => {
    // const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className="contact" id='contact'>

                <div className="head">
                    <h1>Contact Me</h1>
                </div>

                <div className="wrap">

                    <div className="fm">
                        <form action="">
                            <div className="tp">
                                <div className="inp">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" name="name" placeholder="John Doe" autoCapitalize='Name' autoComplete='name' required/>
                                </div>
                                <div className="inp">
                                    <label htmlFor="mail">Email*</label>
                                    <input type="email" name="mail" placeholder="mail@example.com" autoComplete='email' required/>
                                </div>
                            </div>

                            <div className="bm">
                                <label htmlFor="txtarea">Message</label>
                                <textarea name="txtarea" rows={10} placeholder="Type Your Message Here..."></textarea>
                            </div>
                            <small id='sm'></small>
                        </form>
                    </div>

                    <div className="ico">

                        <ul>
                            <li><a href=""><X className='X' /></a></li>
                            <li><a href=""><Instagram className='IG' /></a></li>
                            <li><a href=""><Telegram className='TG' /></a></li>
                            <li><a href="mailto:"><Mail className='ML' /></a></li>
                            <li><a href=""><Phone className='PN' /></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact