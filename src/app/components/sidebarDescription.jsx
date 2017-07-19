import React, { Component } from 'react';

class SidebarDescription extends Component {
    render() {
        if (this.props.sidebarContentProps.descriptionVisible)
            return (
                <div style={{ 'fontSize': this.props.sidebarContentProps.fontSize - 5, 'textAlign': 'center' }}>
                    {this.props.sidebarContentProps.descriptionContent}
                    <hr />
                </div>
            );
        else 
            return null;
    }
}

export default SidebarDescription;