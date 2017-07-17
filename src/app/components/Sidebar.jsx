import React, { Component } from 'react';
import './styles/sidebar.scss';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarLinks from './SidebarLinks.jsx';
import SidebarContent from './SidebarContent.jsx';
import SidebarProfile from './SidebarProfile.jsx';
import SidebarFooter from './SidebarFooter.jsx'

class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isSidebarVisible: false
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    static defaultProps = {
        top: 0,
        fontSize: '35',
        fontStyle: 'dark',
        contentColor: 'black',
        hoverColor:'black',
        profileVisible:true,
        ProfileName:'You have not passed Name',
        hasReactRouterLinks:false,
        hasContentToshow:false,
        transition: 'scale'
    }




    toggleSidebar() {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }

    render() {
        const { top, fontSize, fontStyle, contentColor, hoverColor, profileVisible, profilePic,
            ProfileName, hasReactRouterLinks, hasContentToshow } = this.props;

        return (
            <div>
                <div className={`expandIcon ${(!this.state.isSidebarVisible) && 'show'}`}>
                    <a href="#" onClick={this.toggleSidebar}>
                        <span className="glyphicon glyphicon-menu-right"></span>
                    </a>
                </div>
                <div style={} className={`sidebarMenu ${(this.state.isSidebarVisible) && 'show'}`} >
                    <SidebarHeader closeSidebar={this.toggleSidebar} />
                    <hr />
                    <SidebarProfile />
                    <hr />
                    <SidebarLinks dataForLinks={this.props.dataForLinks} />
                    <hr />
                    <SidebarContent />
                    <hr />
                    <SidebarFooter />
                </div>
            </div>


        );
    }
}

export default Sidebar;