import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
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
            "dislikes": 2345,
            "handle": "@defaultHandle",
            "tuit": "Default tuit"
        }
    }
) => {
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-between pt-2">
            <a href="#" className="wd-text-decoration-none text-secondary">
                <i className="bi bi-chat"></i><span
                className="ps-2">{post.replies}</span>
            </a>
            <a href="#" className="wd-text-decoration-none text-secondary">
                <i className="bi bi-repeat"></i><span
                className="ps-2">{post.retuits}</span>
            </a>
            <span
                className="wd-text-decoration-none text-secondary"
                onClick={()=> dispatch(
                    updateTuitThunk(
                        {
                            ...post,
                            likes: post.likes + 1
                        }
                    )
                )}
            >
                <i className={`${post.likes>0? "bi bi-heart-fill text-danger":"bi bi-heart"}`}></i><span
                className="ps-2">{post.likes}</span>
            </span>
            <span
                className="wd-text-decoration-none text-secondary"
                onClick={()=> dispatch(
                    updateTuitThunk(
                        {
                            ...post,
                            dislikes: post.dislikes + 1
                        }
                    )
                )}
            >
                <i className={`${post.dislikes>0? "bi bi-hand-thumbs-down-fill text-primary":"bi bi-hand-thumbs-down"}`}></i><span
                className="ps-2">{post.dislikes}</span>
            </span>
            <a href="#" className="wd-text-decoration-none text-secondary">
                <i className="bi bi-share"></i><span className="ps-2"></span>
            </a>
        </div>
    );
};
export default TuitStats;