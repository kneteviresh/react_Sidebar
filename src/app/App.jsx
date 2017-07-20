import React from "react";
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar.jsx';
import profileImage from '../images/profilePic.jpg';

class App extends React.Component {


    handleMenuItemClick(clickedLink) {
        console.log('clicked link ', clickedLink);
    }

    render() {
        var dataForLinks =
            [
                {
                    mainLink: "Main Link 1",
                    href: "www.google.com",
                    subLinks: [
                        {
                            subLink: "Sub Link 1",
                            href: "www.google.com",
                            childLinks: [
                                {
                                    childLink: 'Child Link 1',
                                    href: 'www.google.com'
                                },
                                {
                                    childLink: 'Child Link 2',
                                    href: 'www.google.com'
                                }
                            ]
                        },
                        {
                            subLink: "Sub Link 2",
                            href: "www.google.com",
                            childLinks:[]
                        },
                        {
                            subLink: "SubLink 3",
                            href: "www.google.com",
                            childLinks:[]
                        }
                    ]
                },
                {
                    mainLink: "Main Link 2",
                    href: "www.google.com",
                    subLinks: [
                        {
                            subLink: "Sub Link 1",
                            href: "www.google.com",
                            childLinks:[]
                        },
                        {
                            subLink: "Sub Link 2",
                            href: "www.google.com",
                            childLinks:[]
                        },
                        {
                            subLink: "Sub Link 3",
                            href: "www.google.com",
                            childLinks:[]
                        }
                    ]
                },
                {
                    mainLink: "Main Link 3",
                    href: "www.google.com",
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

