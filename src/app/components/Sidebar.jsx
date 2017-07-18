import React, { Component } from 'react';
import './styles/sidebar.scss';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarLinks from './SidebarLinks.jsx';
import SidebarDescription from './sidebarDescription.jsx';
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
        top: 50,
        fontSize: 20,
        fontStyle: 'dark',
        contentColor: 'black',
        hoverColor: 'black',
        profileVisible: true,
        ProfileName: 'Viresh Nete',
        hasReactRouterLinks: false,
        hasContentToshow: false,
        expandIconStyle: 'menu-hamburger',
        headerBackgroundColor: 'white',
        sidebarTitle: 'myProductPromotions',
        descriptionContentHTML: <p>hello friends welcome to india</p>,
        orderOfContents: {
            profile: 3,
            description: 2,
            links: 1
        }
    }

    toggleSidebar() {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }


    render() {
        const { top, fontSize, fontStyle, contentColor, hoverColor, profileVisible, profilePic,
            ProfileName, hasReactRouterLinks, hasContentToshow, expandIconStyle,
            headerBackgroundColor, sidebarTitle, descriptionContentHTML, orderOfContents } = this.props;

        const sidebarHeaderProps = {
            fontSize: fontSize,
            headerBackgroundColor: headerBackgroundColor,
            sidebarTitle: sidebarTitle
        };

        const sidebarContentProps = {
            fontSize: fontSize,
            descriptionContentHTML: descriptionContentHTML
        }

        const SidebarProfileProps = {
            fontSize: fontSize,
            profileVisible: profileVisible,
            ProfileName: ProfileName
        }

        

        var expandButtonTop = top + 10;
        return (
            <div>
                <div style={{ 'top': expandButtonTop + 'px' }} className={`expandIcon ${(!this.state.isSidebarVisible) && 'show'}`}>
                    <a href="#" onClick={this.toggleSidebar}>
                        <span className={`glyphicon glyphicon-${expandIconStyle}`}></span>
                    </a>
                </div>
                <div style={{ 'top': top + 'px' }} className={`sidebarMenu ${(this.state.isSidebarVisible) && 'show'}`} >
                    <SidebarHeader sidebarHeaderProps={sidebarHeaderProps} closeSidebar={this.toggleSidebar} ><hr />
                    </SidebarHeader>

                    {orderOfContents.profile == 1 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}><hr /></SidebarProfile> :
                        orderOfContents.description == 1 ? <SidebarDescription sidebarContentProps={sidebarContentProps}><hr />
                        </SidebarDescription> :
                            <SidebarLinks hasReactRouterLinks={hasReactRouterLinks} fontSize={fontSize} dataForLinks={this.props.dataForLinks}><hr />
                            </SidebarLinks>}

                    {orderOfContents.profile == 2 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}><hr /></SidebarProfile> :
                        orderOfContents.description == 2 ? <SidebarDescription sidebarContentProps={sidebarContentProps}><hr />
                        </SidebarDescription> :
                            <SidebarLinks hasReactRouterLinks={hasReactRouterLinks} fontSize={fontSize} dataForLinks={this.props.dataForLinks}><hr />
                            </SidebarLinks>}

                    {orderOfContents.profile == 3 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}><hr /></SidebarProfile> :
                        orderOfContents.description == 3 ? <SidebarDescription sidebarContentProps={sidebarContentProps}><hr />
                        </SidebarDescription> :
                            <SidebarLinks hasReactRouterLinks={hasReactRouterLinks} fontSize={fontSize} dataForLinks={this.props.dataForLinks}><hr />
                            </SidebarLinks>}


                    {/* 
                    <SidebarProfile SidebarProfileProps={SidebarProfileProps}><hr /></SidebarProfile>

                    <SidebarLinks hasReactRouterLinks={hasReactRouterLinks} fontSize={fontSize} dataForLinks={this.props.dataForLinks}><hr />
                    </SidebarLinks>

                    <SidebarDescription sidebarContentProps={sidebarContentProps}><hr />
                    </SidebarDescription> */}

                    <SidebarFooter font={fontSize} />
                </div>
            </div>


        );
    }
}

export default Sidebar;