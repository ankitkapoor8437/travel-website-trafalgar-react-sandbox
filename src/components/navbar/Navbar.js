import { Component } from "react";
// import { Link } from "react-router-dom";
import '../navbar/Navbar-Styles.css';
import { MenuItems } from "./menu-item";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="nav">
                <h1 className="nav-logo">Trafalgar</h1>
                <div className="hamburger" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>


                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <i className={item.icon}></i> {item.title}
                                </a>
                            </li>)
                    })}
                    <button>Sign Up</button>

                </ul>
            </nav>
        )
    }
}

export default Navbar;