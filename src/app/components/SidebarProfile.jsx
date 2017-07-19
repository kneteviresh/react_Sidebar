import React, { Component } from 'react';
import './styles/sidebarProfile.scss';
//import profilePic from '../../images/profilePic.jpg';

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
        if (this.props.SidebarProfileProps.profileVisible)
            return (
                <div className="sidebarProfile">
                    <div className="sidebarProfile-profileImage">
                        <img onClick={this.toggleImageView}
                            className={`sidebarProfile-profileImage-image ${(this.state.imageFullView ? 'fullView' : 'img-circle')}`}
                            src={this.props.SidebarProfileProps.profileImage}
                            alt="profile picture" />
                        {/* <div className="imageClickMessage">click to expand</div> */}
                        {!this.state.imageFullView && <div style={{ 'fontSize': (this.props.SidebarProfileProps.fontSize) + 'px' }} className="sidebarProfile-userName">
                            {this.props.SidebarProfileProps.ProfileName}
                        </div>}
                    </div>
                    <hr />
                </div>
            );
        else
            return null
    }
}

export default SidebarProfile;