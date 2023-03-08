import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    let profile = useSelector((state) => state.profile);
    return(
        <>
            <div className="d-flex align-items-center">
                <div className="d-flex ps-3 pe-3">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div>
                    <h5 className="pt-0 pb-0 mb-0">
                        {profile.firstName} {profile.lastName}
                    </h5>
                    <div className="text-secondary">6,114 Tweets</div>
                </div>
            </div>
            <img alt="banner_picture" className="w-100" src={`/images/${profile.bannerPicture}`}/>
            <div className="d-flex justify-content-between ms-2 me-2 pb-4 mb-2 position-relative">
                <div>
                    <img alt="profile_picture" className="rounded-circle position-absolute fixed-bottom" height={150}
                         src={`/images/${profile.profilePicture}`}/>
                </div>
                <div>
                    <Link to="/tuiter/edit-profile"
                          className="mt-2 btn btn-large btn-light border-secondary fw-bold rounded-pill float-end">
                        Edit profile
                    </Link>
                </div>

            </div>
            <h5 className="fw-bold pt-0 pb-0 mb-0">
                {profile.firstName} {profile.lastName}
            </h5>
            <div className="text-secondary pb-2">
                {profile.handle}
            </div>
            <div>
                {profile.bio}
            </div>
            <a target="_blank" href={`https://${profile.website}`} rel="noreferrer">{profile.website}</a>
            <div className="d-flex pt-2 pb-2">
                <div className="wd-text-decoration-none text-secondary pe-3">
                    <i className="bi bi-pin-map"></i><span
                    className="ps-1">{profile.location}</span>
                </div>
                <div className="wd-text-decoration-none text-secondary pe-3">
                    <i className="bi bi-balloon"></i><span
                    className="ps-1">Born {profile.dateOfBirth}</span>
                </div>
                <div className="wd-text-decoration-none text-secondary">
                    <i className="bi bi-calendar"></i><span
                    className="ps-1">Joined {profile.dateJoined}</span>
                </div>
            </div>
            <span className="fw-bold">{profile.followingCount}</span>
            <span className="text-secondary pe-3"> Following</span>
            <span className="fw-bold">{profile.followersCount}</span>
            <span className="text-secondary"> Followers</span>
        </>
    );
};

export default ProfileComponent;