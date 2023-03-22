import React, {useState} from "react";
import './index.css';
import TuitStats from "./tuit-stats"
import {useDispatch} from "react-redux";
import {deleteTuit,updateTuit} from "../reducers/tuits-reducer";

const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@defaultHandle",
            "tuit": "Default tuit"
        }
    }
) => {
    let [editingTuit,setEditingTuit]=useState(false);
    let [tuit,setTuit]=useState('');

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const updateTuitHandler = (post) => {
        const newTuit = {
            ...post,
            tuit: tuit
        }
        dispatch(updateTuit(newTuit));
        setTuit('');
        setEditingTuit(false);
    }

    const startEditingTuitHandler = (originalTuit) => {
        setEditingTuit(true);
        setTuit(originalTuit);
    }
    return(
        <div className="list-group-item">
            <div className="d-flex">
                <div>
                    <img alt="avatar"
                         src={`/images/${post.image}`}
                         className="wd-avatar-48px"/>
                </div>
                <div className="ps-3 w-100">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span className="fw-bold">{post.userName} </span>
                            <i className="bi bi-check-circle-fill text-primary"></i>
                            <span className="text-secondary"> {post.handle} &#183; {post.time}</span>
                        </div>
                        <div>
                            {
                                !editingTuit &&
                                <i className="bi bi-pencil-square ps-2"
                                   onClick={() => startEditingTuitHandler(post.tuit)}
                                ></i>
                            }
                            {
                                editingTuit &&
                                <>
                                    <i className="bi bi-check2-square ps-2"
                                       onClick={() => updateTuitHandler(post)}
                                    ></i>
                                </>
                            }
                            <i className="bi bi-x-lg ps-2"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                    </div>
                    <div>
                        {!editingTuit && post.tuit}
                        {
                            editingTuit &&
                            <>
                                <textarea   className="form-control"
                                            rows="6"
                                            value={tuit}
                                            onChange={(event) => setTuit(event.target.value)}
                                />
                            </>
                        }
                    </div>
                    <TuitStats post={post}/>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;