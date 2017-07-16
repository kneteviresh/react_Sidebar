import React, { Component } from 'react';
import './styles/sidebarProfile.scss';
import profilePic from '../../images/profilePic.jpg';

class SidebarProfile extends Component {
    render() {
        return (
            <div className="sidebarProfile">
                <div className="sidebarProfile-profileImage">
                    <img className="img-circle sidebarProfile-profileImage-image" src={profilePic} alt="profile picture" />
                    <div className="sidebarProfile-userName">
                        Viresh Nete
                    </div>
                </div>

            </div>
        );
    }
}

export default SidebarProfile;