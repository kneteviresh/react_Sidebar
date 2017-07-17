import React, { Component } from 'react';
import './styles/sidebarHeader.scss';


class SidebarHeader extends Component {
    render() {
        return (
            <div className="sidebarHeade">
                <div className="row">
                    <div style={{'fontSize':this.props.fontSize+'px'}} className="center sidebarHeader-text">
                        <strong>SIDEBAR TITLE</strong>
                    </div>
                    <div>
                        <a style={{'fontSize':this.props.fontSize+'px'}} className="center sidebarHeader-close-button" onClick={this.props.closeSidebar} href="#">
                            <span className="glyphicon glyphicon-menu-left"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarHeader;