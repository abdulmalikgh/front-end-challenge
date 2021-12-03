import '../assets/scss/footer.scss'
import TermsAndPrivacy from "./TermsAndPrivacy" 
import Facebook from '../assets/images/facebook.svg'
import Twitter from '../assets/images/twitter.svg'
import Instagram from '../assets/images/instagram.svg'

function Footer() {
    
    return (
        <footer className="footer">
            <div className="footer_inner">
                <div className="footer_navigation">
                    <div className="footer_nav_section">
                        <p className="side_text">Counter Delivery, Carters Beach</p>
                        <p>PostCentre, Westport</p>
                    </div>
                    <div className="footer_nav_section">
                        <h2>
                            About
                        </h2>
                        <ul>
                            <li>
                                <a href='#'>
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_nav_section">
                        <h2>
                            Support
                        </h2>
                        <ul>
                            <li>
                                <a href='#'>
                                Help Center
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                Cancellation Options
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                Neighborhood Support
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                Trust & Safety
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_nav_section">
                        <h2>
                        Address
                        </h2>
                        <p className="side_text">Counter Delivery, Carters Beach</p>
                        <p>PostCentre, Westport</p>
                        <div className="social">
                            <div className="facebook">
                                <img src={ Facebook } />
                            </div>
                            <div className="instgram">
                                <img src={ Instagram } />
                            </div>
                            <div className="twitter">
                                <img src={ Twitter } />
                            </div>
                        </div>
                    </div>
                    <div className="footer_nav_section">
                    </div>
                </div>
               <TermsAndPrivacy />
            </div>
        </footer>
    )
}

export default Footer