import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const screenChoices = [
        {
            label: 'Tuiter',
            link: '/tuiter',
            activePaths: ['',undefined],
            iconClassName: ""
        },
        {
            label: 'Home',
            link: '/tuiter/home',
            activePaths: ['home'],
            iconClassName: "bi bi-house"
        },
        {
            label: 'Explore',
            link: '/tuiter/explore',
            activePaths: ['explore'],
            iconClassName: "bi bi-hash"
        },
        {
            label: 'Notifications',
            link: '#',
            activePaths: ['notifications'],
            iconClassName: "bi bi-bell"
        },
        {
            label: 'Messages',
            link: '#',
            activePaths: ['messages'],
            iconClassName: "bi bi-envelope"
        },
        {
            label: 'Bookmarks',
            link: '#',
            activePaths: ['bookmarks'],
            iconClassName: "bi bi-bookmark"
        },
        {
            label: 'Lists',
            link: '#',
            activePaths: ['lists'],
            iconClassName: "bi bi-list-ul"
        },
        {
            label: 'Profile',
            link: '#',
            activePaths: ['profile'],
            iconClassName: "bi bi-person"
        },
        {
            label: 'More',
            link: '#',
            activePaths: ['more'],
            iconClassName: "bi bi-three-dots"
        },
        {
            label: 'Labs',
            link: '/',
            activePaths: [],
            iconClassName: "bi bi-pc-display-horizontal text-warning"
        }
    ]
    return (
        <div className="list-group">
            {
                screenChoices.map(screenChoice =>
                    <Link to={screenChoice.link} className={`list-group-item ${screenChoice.activePaths.includes(active)?'active':''}`}>
                        <div className="row justify-content-start align-items-center">
                            {
                                screenChoice.iconClassName !== '' ?
                                    <div className="col-3">
                                        <div><i className={screenChoice.iconClassName}></i></div>
                                    </div> : ''
                            }
                            <div className="col">
                                <div className="d-none d-xl-block">{screenChoice.label}</div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};
export default NavigationSidebar;