import React, { Component } from 'react';
import './styles/sidebar.scss';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarLinks from './SidebarLinks.jsx';
import SidebarDescription from './sidebarDescription.jsx';
import SidebarProfile from './SidebarProfile.jsx';
import SidebarFooter from './SidebarFooter.jsx';
import defaultPic from '../../images/profilePic.jpg';


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
        fontSize: 25,
        fontStyle: 'Arial, Helvetica, sans-serif',
        contentColor: 'black',
        hoverColor: 'black',
        profileVisible: true,
        ProfileName: 'Viresh Nete',
        hasReactRouterLinks: false,
        descriptionVisible:true,
        expandIconStyle: 'menu-hamburger',
        headerBackgroundColor: 'white',
        sidebarTitle: 'React sliding sidebar',
        descriptionContent: <p>hello friends welcome to india</p>,
        orderOfContents: {
            profile: 1,
            description: 2,
            links: 3
        },
        profileImage: defaultPic
    }

    toggleSidebar() {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }

    validateOrderOfContent(orderOfContent) {
        var arr = [orderOfContent.profile, orderOfContent.description, orderOfContent.links]
        var valid = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && arr[i] < 4) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] == arr[j])
                        valid = false;
                    break;
                }
            }
            else {
                valid = false
                break;
            }
        }
        return valid;

    }


    render() {
        var { top, fontSize, fontStyle, contentColor, hoverColor, profileVisible, profilePic,
            ProfileName, hasReactRouterLinks, hasContentToshow, expandIconStyle,
            headerBackgroundColor, sidebarTitle, descriptionContent, orderOfContents,
            profileImage, dataForLinks, onLinkItemClick,descriptionVisible } = this.props;

        const sidebarHeaderProps = {
            fontSize: fontSize,
            fontStyle:fontStyle,
            headerBackgroundColor: headerBackgroundColor,
            sidebarTitle: sidebarTitle
        };

        const sidebarContentProps = {
            fontSize: fontSize,
            fontStyle:fontStyle,
            descriptionContent: descriptionContent,
            descriptionVisible:descriptionVisible
        }

        const SidebarProfileProps = {
            fontSize: fontSize,
            fontStyle:fontStyle,
            profileVisible: profileVisible,
            ProfileName: ProfileName,
            profileImage: profileImage
        }


        const sidebarLinksProps = {
            hasReactRouterLinks: hasReactRouterLinks,
            fontSize: fontSize,
            fontStyle:fontStyle,
            dataForLinks: dataForLinks,
            onLinkItemClick: onLinkItemClick
        }

        var validOrder = this.validateOrderOfContent(orderOfContents)
        if (!validOrder) {
            orderOfContents = {
                profile: 1,
                description: 2,
                links: 3
            }
        }
        var expandButtonTop = top + 10;
        var heightOfSidebar = 100-((top*100)/window.innerHeight);
        return (
            <div>
                <div style={{ 'top': expandButtonTop + 'px' }} className={`expandIcon ${(!this.state.isSidebarVisible) && 'show'}`}>
                    <a href="#" onClick={this.toggleSidebar}>
                        <span className={`glyphicon glyphicon-${expandIconStyle}`}></span>
                    </a>
                </div>
                <div style={{ 'top': top + 'px','height':heightOfSidebar+'%' }} className={`sidebarMenu ${(this.state.isSidebarVisible) && 'show'}`} >
                    <SidebarHeader sidebarHeaderProps={sidebarHeaderProps} closeSidebar={this.toggleSidebar} >
                    </SidebarHeader>
                    
                    {orderOfContents.profile == 1 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}></SidebarProfile> :
                        orderOfContents.description == 1 ? <SidebarDescription sidebarContentProps={sidebarContentProps}>
                        </SidebarDescription> :
                            <SidebarLinks sidebarLinksProps={sidebarLinksProps}>
                            </SidebarLinks>}
                    
                    {orderOfContents.profile == 2 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}></SidebarProfile> :
                        orderOfContents.description == 2 ? <SidebarDescription sidebarContentProps={sidebarContentProps}>
                        </SidebarDescription> :
                            <SidebarLinks sidebarLinksProps={sidebarLinksProps}>
                            </SidebarLinks>}
                    
                    {orderOfContents.profile == 3 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}></SidebarProfile> :
                        orderOfContents.description == 3 ? <SidebarDescription sidebarContentProps={sidebarContentProps}>
                        </SidebarDescription> :
                            <SidebarLinks sidebarLinksProps={sidebarLinksProps}>
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


        )

    }
}

export default Sidebar;