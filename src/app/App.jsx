import React from "react";
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
    render() {
        var dataForLinks =
            [
                {
                    mainLink: "Product Hierarchy",
                    href: "www.google.com",
                    onClick: "this.handleClick()",
                    subLinks: [
                        {
                            linkName: "link1",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            linkName: "link2",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            linkName: "link3",
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
                            linkName: "link1",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            linkName: "link2",
                            linkTO: "www.google.com",
                            Click: "this.handleClick()"
                        },
                        {
                            linkName: "link3",
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
                <Sidebar dataForLinks={dataForLinks} />
            </div>
        );
    }
};

export default App;

