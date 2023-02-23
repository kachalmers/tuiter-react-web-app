import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-house"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Home</div>
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-hash"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Explore</div>
                    </div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-bell"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Notifications</div>
                    </div>
                </div>
            </a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-envelope"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Messages</div>
                    </div>
                </div>
            </a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-bookmark"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Bookmarks</div>
                    </div>
                </div>
            </a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-list-ul"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Lists</div>
                    </div>
                </div>
            </a>
            <a className={`list-group-item ${active === 'profile'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-person"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">Profile</div>
                    </div>
                </div>
            </a>
            <a className={`list-group-item ${active === 'more'?'active':''}`}>
                <div className="row justify-content-start align-items-center">
                    <div className="col-3">
                        <div><i className="bi bi-three-dots"></i></div>
                    </div>
                    <div className="col">
                        <div className="d-none d-xl-block">More</div>
                    </div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;