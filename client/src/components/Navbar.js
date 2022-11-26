import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar shadow">
            <div className="navbar-container">
                <div>
                    <Link className="navbar-item-home" to="/">Budgetium</Link>
                </div>
                <div className="navbar-item-container">
                    <div className="navbar-link-items">
                        <Link className="navbar-item" to="/">A link</Link>
                        <Link className="navbar-item" to="/">B link</Link>
                    </div>
                    <div className="navbar-overflow-items">
                        <Link className="navbar-item" to="/">Z link</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;