import "../assets/scss/header.scss"
import logoIcon from '../assets/images/menu-left-2-icon 1.svg'
import searchIcon from '../assets/images/Search.svg'
import iconBars from '../assets/images/bars.svg'
import Cancel from '../assets/images/cancel.svg'

function Header() {
    let toggleNavBar = function() {
        let mainSidebar = document.getElementById('mainSidebar')
        mainSidebar.style.display = 'flex'
      
    }
    return (
        <header className="header">
            <nav>
                <div className="icon _icon_small">
                        <button onClick = { toggleNavBar }>
                            <img  src={iconBars} alt="" />
                        </button>
                    </div>
                <div className="__search">
                    <input name="search" className="_search_input"></input>
                    <button className="search_icon">
                    <img width="24px" height="24px" src={searchIcon} alt="" />
                    </button>
                    <div className="input_placeholder" id="__id">
                        <div className='with_icon'>
                            Granger, IA &nbsp; <img src={ Cancel } alt=""/>
                        </div>
                        <p className="add_more">
                            Add More
                        </p>
                    </div>
                </div>

                <div className="right_side_nav">
                    <div className="text">
                        <ul>
                            <li>
                                <a href="#">Udwell Now</a>
                            </li>
                            <li>
                                <a href="#">Sell a property</a>
                            </li>
                        </ul>
                    </div>
                    <div className="icon">
                        <button>
                            <img src={logoIcon} alt="" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
      );

}

export default Header
