import React, { Component } from 'react';

class SidebarDescription extends Component {
    render() {
        return (
            <div style={{'fontSize':this.props.sidebarContentProps.fontSize}}>
                {this.props.sidebarContentProps.descriptionContentHTML}
            </div>
        );
    }
}

export default SidebarDescription;