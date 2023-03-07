import React from "react";
import './index.css';
import TuitStats from "./tuit-stats"
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
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
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div>
                        <span className="fw-bold">{post.userName} </span>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        <span className="text-secondary"> {post.handle} &#183; {post.time}</span>
                    </div>
                    <div>
                        {post.tuit}
                    </div>
                    <TuitStats post={post}/>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;