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
                    </div>
                    <div className="navbar-overflow-items">
                        <Link className="navbar-item" to="/login">Login</Link>
                        <Link className="navbar-item" to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;