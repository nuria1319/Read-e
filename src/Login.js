import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "./Styles/Login.css";

const Login=()=>{
    const{ loginWithRedirect } = useAuth0();

    async function loginAuth(){
        localStorage.clear()
        await loginWithRedirect()
    }

    return(
        <button className='button w-100' onClick={()=>loginAuth()}>Login</button>
    )
}
export default Login;