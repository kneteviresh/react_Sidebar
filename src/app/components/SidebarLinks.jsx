import React, { Component } from 'react';
import './styles/sidebarLinks.scss';

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

    expandSubMenu(index) {
        var selectedSubMenu = this.state.firstChildSublink;
        if (selectedSubMenu[index] == true){
            //selectedSubMenu.fill(true);
            selectedSubMenu[index] = false;}
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
                <li className="sidebarLink-SubListItem" key={key}>
                    <a className="anchorLinks" href="#"><div className="SubLinks"><strong>{subLink.linkName}</strong></div></a>
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
                    <div className="MainLinksAndExpandparent">

                        {link.subLinks.length? <a className="expandSubMenuIcon" href="#" onClick={() => this.expandSubMenu(key)}>
                            <span className="glyphicon glyphicon-menu-right"></span>
                        </a>:''}
                        <a className="MainLinks anchorLinks" href="www.google.com"><strong>{link.mainLink}</strong>
                        </a>

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
                <h2><strong>QUICK LINKS</strong></h2>
                {this.getlinks(this.props.dataForLinks)}
            </div>
        );
    }
}

export default SidebarLinks;