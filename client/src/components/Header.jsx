export default function Header (){
    return(
        <>
        <header>
            <div><strong>VectorFabric</strong></div>
            <input class="search-bar" placeholder="Search vectors..." />
            <nav>
                <a href="#">Gallery</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="#">Logout</a>
                <a href="#">Profile</a>
            </nav>
        </header>

        </>
    )
}