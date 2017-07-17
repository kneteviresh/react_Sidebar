import React, { Component } from 'react';

class SidebarContent extends Component {
    render() {
        return (
            <div>
                <h2><strong>DESCRIPTION</strong></h2>
                <blockquote style={{'font-size':(this.props.fontSize-20)+'px'}}> hi all ,
                    this is react-responsive-sidebar-menu

                    Features involved:
                    * responsible with screen size
                    * customisable color
                    * all links will support both anchor tags href and Link for react router
                    * customisable font-size and color
                    * provides onClick function to decide which link clicked
                    * user profile pic , name and short info


                                        Features involved:
                    * responsible with screen size
                    * customisable color
                    * all links will support both anchor tags href and Link for react router
                    * customisable font-size and color
                    * provides onClick function to decide which link clicked
                    * user profile pic , name and short info
                </blockquote>
            </div>
        );
    }
}

export default SidebarContent;