import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "./Styles/Logout.css";

const Logout = () => {
    const { logout } = useAuth0();

    function logoutAuth(){
        localStorage.clear()
        logout()
    }

    return (
        <button className='button w-100' onClick={()=>logoutAuth( { returnTo: "http://localhost:3000/" } )}>Logout</button>
    )
}

export default Logout;