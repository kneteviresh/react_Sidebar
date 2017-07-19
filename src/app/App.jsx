import React from "react";
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar.jsx';
import profileImage from '../images/kat.jpg';

class App extends React.Component {


    handleMenuItemClick(clickedLink) {
        console.log('clicked on ', clickedLink)
    }

    render() {
        var dataForLinks =
            [
                {
                    mainLink: "Product Hierarchy",
                    href: "www.google.com",
                    onClick: "this.handleClick()",
                    subLinks: [
                        {
                            subLink: "link1",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            subLink: "link2",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            subLink: "link3",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        }
                    ]
                },
                {
                    mainLink: "tpnb",
                    href: "www.google.com",
                    onClick: "this.handleClick()",
                    subLinks: [
                        {
                            subLink: "link1",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            subLink: "link2",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            subLink: "link3",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        }
                    ]
                },
                {
                    mainLink: "Search by supplier",
                    href: "www.google.com",
                    onClick: "this.handleClick()",
                    subLinks: []
                }
            ]

        return (
            <div>
                <Sidebar onLinkItemClick={this.handleMenuItemClick} profileImage={profileImage} dataForLinks={dataForLinks} />
            </div>
        );
    }
};

export default App;

