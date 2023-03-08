import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {saveNewProfile} from "../reducers/profile-reducer";
import {useDispatch} from "react-redux";
import "./index.css"

const EditProfile = () => {
    let profile = useSelector((state) => state.profile);
    let [name,setName]=useState(profile.firstName+' '+profile.lastName);
    let [bio,setBio]=useState(profile.bio);
    let [location,setLocation]=useState(profile.location);
    let [website,setWebsite]=useState(profile.website);
    let [editingDOB,setEditingDOB]=useState(false);
    let [dateOfBirth,setDateOfBirth]=useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    const saveHandler = () => {
        const splitName = name.split(' ');
        const newProfile = {
            ...profile,
            firstName: splitName[0],
            lastName: splitName[1],
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }
        dispatch(saveNewProfile(newProfile));
    }
    return(
        <>
            <div className="d-flex align-items-center justify-content-between pb-2">
                <div className="d-flex align-items-center">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg me-4 text-black"></i>
                    </Link>
                    <h5 className="mb-0">
                        Edit Profile
                    </h5>
                </div>
                <div>
                    <Link to="/tuiter/profile"
                          className="btn btn-sm fw-bold rounded-pill float-end ps-3 pe-3 bg-black text-white"
                          onClick={saveHandler}
                    >
                        Save
                    </Link>
                </div>
            </div>
            <img alt="banner_picture" className="w-100" src={`/images/${profile.bannerPicture}`}/>
            <div className="d-flex ms-2 me-2 pb-4 mb-2 position-relative">
                <br/><br/>
                <div>
                    <img alt="profile_picture" className="rounded-circle position-absolute fixed-bottom" height={150}
                         src={`/images/${profile.profilePicture}`}/>
                </div>
            </div>
            <div className="mt-2 mb-2 position-relative">
                <label for="name"  className="ps-3 pt-2 position-absolute text-secondary wd-font-13px">
                    Name
                </label>
                <input  id="name"
                        className="form-control pt-4 ps-3"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="mt-2 mb-2 position-relative">
                <label for="bio" className="ps-3 pt-2 position-absolute text-secondary wd-font-13px">
                    Bio
                </label>
                <textarea   id="bio"
                            className="form-control pt-4 ps-3"
                            rows="3"
                            value={bio}
                            onChange={(event) => setBio(event.target.value)}
                />
            </div>
            <div className="mt-2 mb-2 position-relative">
                <label for="location" className="ps-3 pt-2 position-absolute text-secondary wd-font-13px">
                    Location
                </label>
                <input  id="location"
                        className="form-control pt-4 ps-3"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                />
            </div>
            <div className="mt-2 mb-2">
                <input className="form-control ps-3"
                       placeholder="Website"
                       value={website}
                       onChange={(event) => setWebsite(event.target.value)}
                />
            </div>
            <div className="mt-2 mb-2">
                <span className="text-secondary wd-font-13px">Birth date &#183; </span>
                {
                    !editingDOB &&
                    <>
                        <span   className="text-primary wd-font-13px"
                                onClick={(event)=>setEditingDOB(true)}
                        >Edit</span>
                        <div>{dateOfBirth}</div>
                    </>
                }
                {
                    editingDOB &&
                    <>
                        <span   className="text-primary wd-font-13px"
                                onClick={(event)=>setEditingDOB(false)}
                        >Done editing</span>
                        <input className="form-control ps-3"
                               placeholder="Birth date"
                               value={dateOfBirth}
                               onChange={(event) => setDateOfBirth(event.target.value)}
                        />
                    </>

                }
            </div>
            <div className="d-flex align-items-center justify-content-between pb-2">
                <div>
                    Switch to professional
                </div>
                <div className="d-flex align-items-center">
                    <i className="bi bi-arrow-right me-4"></i>
                </div>
            </div>
        </>
    );
};
export default EditProfile;