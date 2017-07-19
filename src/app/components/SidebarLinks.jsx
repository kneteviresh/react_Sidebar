import React, { Component } from 'react';
import './styles/sidebarLinks.scss';
import { Link } from 'react-router-dom';

class SidebarLinks extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            firstChildSublink: [],
        }
        this.getlinks = this.getlinks.bind(this);
        this.getSubLinks = this.getSubLinks.bind(this);
        this.expandSubMenu = this.expandSubMenu.bind(this);
    }

    handleMainLinkClick(clickedLink){
        if(this.props.sidebarLinksProps.onLinkItemClick)
            this.props.sidebarLinksProps.onLinkItemClick(clickedLink)
    }

    expandSubMenu(index) {
        var selectedSubMenu = this.state.firstChildSublink;
        if (selectedSubMenu[index] == true) {
            //selectedSubMenu.fill(true);
            selectedSubMenu[index] = false;
        }
        else {
            //selectedSubMenu[index] = true;
            //selectedSubMenu.fill(false);
            selectedSubMenu[index] = true;
        }

        this.setState({
            firstChildSublink: selectedSubMenu
        });
    }

    getSubLinks(subLinksItems, key) {
        const subLinks = subLinksItems;
        var subListItems;
        if (subLinks.length == 0) return;
        else {
            subListItems = subLinks.map((subLink, key) =>
                <li style={{ 'fontSize': (this.props.sidebarLinksProps.fontSize - 10) + 'px' }} className="sidebarLink-SubListItem" key={key}>
                    <div className="">
                        {this.props.sidebarLinksProps.hasReactRouterLinks ?
                            <Link className="subLinks anchorLinks" to='#' >
                                <strong>{subLink.linkTo}</strong>
                            </Link> :
                            <a className="SubLinks anchorLinks" onClick={()=>this.handleMainLinkClick(subLink)} href="#"><strong>{subLink.subLink}</strong>
                            </a>}
                    </div>
                </li>
            )
        }

        return (
            this.state.firstChildSublink[key] && <ul className="sidebarLink-SubMenuList">{subListItems}</ul>
        )
    }

    getlinks(linkItems) {
        const links = linkItems;
        const listItems = links.map((link, key) =>
            <div key={key}>
                <li className="sidebarLink-MainListItem" >
                    <div style={{ 'fontSize': (this.props.sidebarLinksProps.fontSize - 4) + 'px' }} className="MainLinksAndExpandparent">

                        {link.subLinks.length ? <a className="expandSubMenuIcon" href="#" onClick={() => this.expandSubMenu(key)}>
                            <span className="glyphicon glyphicon-menu-right"></span>
                        </a> : ''}

                        {this.props.sidebarLinksProps.hasReactRouterLinks ?
                            <Link className="MainLinks anchorLinks" to='#' >
                                <strong>{link.mainLink}</strong>
                            </Link> :
                            <a className="MainLinks anchorLinks" onClick={()=>this.handleMainLinkClick(link)} href="#"><strong>{link.mainLink}</strong>
                            </a>}
                    </div>
                    {this.getSubLinks(link.subLinks, key)}
                </li>
            </div>
        )
        return (
            <ul className="sidebarLink-MainList">{listItems}</ul>
        )
    }

    render() {
        return (
            <div className="sidebarLinks">
                {this.getlinks(this.props.sidebarLinksProps.dataForLinks)}
            </div>
        );
    }
}

export default SidebarLinks;