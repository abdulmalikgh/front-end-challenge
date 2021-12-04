import "../assets/scss/header.scss"
import logoIcon from '../assets/images/menu-left-2-icon 1.svg'
import searchIcon from '../assets/images/Search.svg'
function Header() {
    return (
        <header className="header">
            <nav>
                <div className="icon _icon_small">
                        <button>
                            <img src={logoIcon} alt="" />
                        </button>
                    </div>
                <div className="__search">
                    <input name="search" className="_search_input"></input>
                    <button className="search_icon">
                    <img width="24px" height="24px" src={searchIcon} alt="" />
                    </button>
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
