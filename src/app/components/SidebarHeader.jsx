import React, { Component } from 'react';
import './styles/sidebarHeader.scss';


class SidebarHeader extends Component {
    render() {
        var headerStyle={
            'fontSize':this.props.sidebarHeaderProps.fontSize+'px',
            'backgroundColor':this.props.sidebarHeaderProps.headerBackgroundColor
        }
        return (
            <div style={headerStyle} className="sidebarHeader">
                <div className="row">
                    <div  className="center sidebarHeader-text">
                        <strong>{this.props.sidebarHeaderProps.sidebarTitle}</strong>
                    </div>
                    <div>
                        <a style={{'fontSize':this.props.sidebarHeaderProps.fontSize+'px'}} className="center sidebarHeader-close-button" onClick={this.props.closeSidebar} href="#">
                            <span className="glyphicon glyphicon-menu-left"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarHeader;