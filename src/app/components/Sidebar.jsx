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

    toggleSidebar() {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }

    render() {
        return (
            <div>
                <div className={`expandIcon ${(!this.state.isSidebarVisible) && 'show'}`}>
                    <a href="#" onClick={this.toggleSidebar}>
                        <span className="glyphicon glyphicon-menu-right"></span>
                    </a>
                </div>
                <div className={`sidebarMenu ${(this.state.isSidebarVisible) && 'show'}`} >
                    <SidebarHeader closeSidebar={this.toggleSidebar} />
                    <hr />
                    <SidebarProfile />
                    <hr />
                    <SidebarLinks />
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