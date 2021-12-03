import "../assets/scss/header.scss"

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="__search">
                    <input name="search" className="_search_input"></input>
                    <button className="search_icon"></button>
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
                            
                        </button>
                    </div>
                </div>
            </nav>
        </header>
      );

}

export default Header
