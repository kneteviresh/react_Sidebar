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
        top: 100,
        fontSize: 35,
        fontStyle: 'dark',
        contentColor: 'black',
        hoverColor: 'black',
        profileVisible: true,
        ProfileName: 'You have not passed Name',
        hasReactRouterLinks: false,
        hasContentToshow: false,
    }

    toggleSidebar() {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }


    render() {
     const { top, fontSize, fontStyle, contentColor, hoverColor, profileVisible, profilePic,
            ProfileName, hasReactRouterLinks, hasContentToshow } = this.props;
        var expandButtonTop = top+10;
        
        return (
            <div>
                <div style={{'top':expandButtonTop+'px'}} className={`expandIcon ${(!this.state.isSidebarVisible) && 'show'}`}>
                    <a href="#" onClick={this.toggleSidebar}>
                        <span className="glyphicon glyphicon-menu-right"></span>
                    </a>
                </div>
                <div style={{'top':top+'px'}} className={`sidebarMenu ${(this.state.isSidebarVisible) && 'show'}`} >
                    <SidebarHeader fontSize={fontSize} closeSidebar={this.toggleSidebar} />
                    <hr />
                    <SidebarProfile fontSize={fontSize}/>
                    <hr />
                    <SidebarLinks hasReactRouterLinks={hasReactRouterLinks} fontSize={fontSize} dataForLinks={this.props.dataForLinks} />
                    <hr />
                    <SidebarContent fontSize={fontSize} />
                    <hr />
                    <SidebarFooter font={fontSize} />
                </div>
            </div>


        );
    }
}

export default Sidebar;