import Login from "./Login";
import Logout from "./Logout";
import Novedades from "./Novedades";
import Biblioteca from "./Biblioteca";
import {useAuth0} from "@auth0/auth0-react";
import "./Styles/NavBar.css";

function NavBar() {
    const {isAuthenticated} = useAuth0()
    return <div className="navbar-container">
        <header className="d-flex justify-content-between py-3">

            <a href="/" className="home d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
                <div className="link-home">Home</div>
            </a>
            <a href="http://localhost:3000/novedades" className="nav-link" aria-current="page">Novedades</a>

            <div className="right-buttons flex-row">

                {isAuthenticated ? (
                    <>
                    <div className="right-buttons-library">
                        <a href="http://localhost:3000/biblioteca" className="nav-link d-flex align-items-center" aria-current="page">Tu biblioteca</a>
                    </div>
                    <div className="right-buttons-logout">
                        <Logout className="button" />
                    </div>
                    </>
                ) : (
                    <div className="buttons-login">
                        <Login className="button" />
                    </div>
                )}
            </div>
        </header>
    </div>

}

export default NavBar;



