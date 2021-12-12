import React from 'react'; //optional

const firstName = "Mohammed";
const lastName = "Abu-Zeinah";
const avatar = "/profile-hex.png";
const title = "Resolution Specialist - Pod Lead"
const description = "Escalations, troubleshooting and being awsome! ;-)"

function Profile() {
    return (
        <div className="App-profilecontainer">
            <div className="profile">
                <img className="profile_image" src={avatar} alt='profilePictureGoesInHere'/>
            </div>
            <br/>
            <div className="profile_name">
                <h2><span className="profile-bold">{firstName}</span> {lastName}</h2>
            </div>
            <div className="profile_title">
                <h2>{title}</h2>
            </div>
            <div className="profile_description">
                <h3>{description}</h3>
            </div>
        </div>
    );
}

export default Profile;