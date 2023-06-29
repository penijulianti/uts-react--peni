import {Link,NavLink} from "react-router-dom";

export default function Header(){

    return(
        <header>
            <Link to="/" className="logo">
                <div>KPOP</div>
            </Link>

            <nav>
                <NavLink to="/member">
                    <div>Home</div>
                </NavLink>
                <NavLink to="/about">
                    <div>About</div>
                </NavLink>
            </nav>

            <button>Login</button>
        </header>
    )
}