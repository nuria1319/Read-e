import { useAuth0 } from "@auth0/auth0-react";
import {useEffect} from "react";
import "../Styles/Profile.css";

const Profile = () => {
    
    const { user, isAuthenticated} = useAuth0();

    const userMail = localStorage.getItem('userMail')
    const userName = localStorage.getItem('userName')
    const userPicture = localStorage.getItem('userPicture')



    return (
        isAuthenticated && (
            <div className="profile-content row col-sm-6 col-md-12">
                <img className="profile-img" src={userPicture} />
                <div className="profile-name-text">Hola {userName}, aquí está tu lista de "guardados"</div>
            </div>
        )
    )

}

export default Profile;