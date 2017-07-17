import React, { Component } from 'react';
import './styles/sidebarProfile.scss';
import profilePic from '../../images/profilePic.jpg';

class SidebarProfile extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imageFullView: false
        }
        this.toggleImageView = this.toggleImageView.bind(this);
    }

    toggleImageView() {
        this.setState({
            imageFullView: !this.state.imageFullView
        });
    }

    render() {
        var imageStyle = {
            'height': '100%',
            'width': '100%'
        }
        return (
            <div className="sidebarProfile">
                <div className="sidebarProfile-profileImage">
                    <img onClick={this.toggleImageView}
                        className={`sidebarProfile-profileImage-image ${(this.state.imageFullView ? 'fullView' : 'img-circle')}`}
                        src={profilePic}
                        alt="profile picture" />
                    {!this.state.imageFullView && <div className="sidebarProfile-userName">
                        Viresh Nete
                    </div>}
                </div>
            </div>
        );
    }
}

export default SidebarProfile;