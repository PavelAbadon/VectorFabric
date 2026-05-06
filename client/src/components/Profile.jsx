import { useContext } from "react";
import UserContext from "../contexts/UserContext";
//import { useNavigate } from "react-router";

export default function Profile (){
    const { user } = useContext(UserContext);
    const email = user?.email;
    const username = email?.split("@")[0];
    const profilePicture = user?.profilePicture;
    
    //console.log(username);

    return (
        <div className="container profile-page">

            {/* PROFILE HEADER */}
            <div className="profile-header">
                <img 
                    className="avatar"
                    src={profilePicture} 
                    alt="avatar"
                />

                <div className="profile-info">
                    <h2>{username}</h2>
                    <p>{user?.email}</p>
                    <button className="edit-profile-btn">Edit Profile</button>
                </div>
            </div>

            {/* USER STATS */}
            <div className="profile-stats">
                <div className="stat">
                <h3>12</h3>
                <p>Uploads</p>
                </div>

                <div className="stat">
                <h3>34</h3>
                <p>Likes</p>
                </div>

                <div className="stat">
                <h3>5</h3>
                <p>Favorites</p>
                </div>
            </div>

            {/* USER UPLOADS */}
            <h2 className="section-title">My Uploads</h2>

            <div className="grid">
                <div className="card">
                <img src="https://picsum.photos/203"/>
                <p>Vector 1</p>
                </div>

                <div className="card">
                <img src="https://picsum.photos/201"/>
                <p>Vector 2</p>
                </div>

                <div className="card">
                <img src="https://picsum.photos/207"/>
                <p>Vector 3</p>
                </div>
            </div>

        </div>
    )
}