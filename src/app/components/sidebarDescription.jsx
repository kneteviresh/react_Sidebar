import React, { Component } from 'react';

class SidebarDescription extends Component {

    render() {
        var descStyle = {
            'fontSize': this.props.sidebarContentProps.fontSize - 5,
            'textAlign': 'center',
            'fontFamily': this.props.sidebarContentProps.fontStyle
        }
        if (this.props.sidebarContentProps.descriptionVisible)
            return (
                <div style={descStyle}>
                    {this.props.sidebarContentProps.descriptionContent}
                    <hr />
                </div>
            );
        else
            return null;
    }
}

export default SidebarDescription;