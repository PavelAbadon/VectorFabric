import { Link } from "react-router";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Header (){
    const {isAuthenticated, onLogout, user} = useContext(UserContext);

    return(
        <>
        <header>
            <div><strong>VectorFabric</strong></div>
            <input className="search-bar" placeholder="Search vectors..." />
            <nav>
                <Link to="/">Home</Link>
                <Link to="#">Gallery</Link>
                {!isAuthenticated
                ?<>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
                :
                <>
                    <Link to="/upload" >UpLoad Vector</Link>
                    <Link to={`/${user._id}/details`}>Profile</Link>
                    <Link to="/" onClick={onLogout}>Logout</Link>
                    <p>{user?.email}</p>
                </>}
                
                
            </nav>
        </header>

        </>
    )
}