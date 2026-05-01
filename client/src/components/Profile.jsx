export default function Profile (){
    return (
        <div className="container profile-page">

            {/* PROFILE HEADER */}
            <div className="profile-header">
                <div className="avatar"></div>

                <div className="profile-info">
                <h2>John Doe</h2>
                <p>john.doe@email.com</p>
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