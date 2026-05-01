import { Link } from "react-router"

export default function Header (){
    return(
        <>
        <header>
            <div><strong>VectorFabric</strong></div>
            <input className="search-bar" placeholder="Search vectors..." />
            <nav>
                <Link to="/">Home</Link>
                <Link to="#">Gallery</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="#">Logout</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>

        </>
    )
}