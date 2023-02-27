import React from "react";
import './index.css';

const showTuitText = (tuitText) => {
    const splitText = tuitText.split(' ');
    return(
        <span>
            {
                splitText.map(word =>
                    <span>
                        {
                            word.charAt(0)==='@' ?
                            <span className="text-primary wd-text-decoration-none">{word} </span>
                            : <span>{word} </span>
                        }
                    </span>
                )
            }
        </span>
    );
}

const showLinkWithText = (post) => {
    return(<span>&rarr; <a href={'//'+post.link} className="wd-text-decoration-none text-primary">
            <span> {post.link}</span>
    </a>
    </span>

    );
}

const showLinkWithImage = (post) => {
    return(
        <div className="list-group-item">
            <div>
                {post.linkTitle}
            </div>
            <div className="text-secondary">
                {post.linkText}
            </div>
            <div>
                <a href={'//'+post.link} className="wd-text-decoration-none text-secondary">
                    <i className="bi bi-link-45deg"></i><span className="ps-2">{post.link}</span>
                </a>
            </div>
        </div>
    );
}

const PostItem = (
    {
        post =   {
            "avatarIcon": "../../images/spaceship.png",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "tuitText": "Amazing show about @Inspiration4x mission!",
            "tuitImage": "../../images/astronaut.png",
            "linkTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "linkText": "From training to launch to landing, this all-access docuseries rides along with the Inpiration4 crew on the first all-civilian orbital space ...",
            "link": "netflix.com",
            "comments": "4.2K",
            "isComment": false,
            "commentedTuit": {
                "avatarIcon": "../../images/spacex.png",
                "userName": "Default username",
                "handle": "Default handle",
                "time": "Default commented tuit time",
                "tuitText": "Default commented tuit text"
            },
            "retuits": "3.5K",
            "isRetuit": false,
            "retuiter": "",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <div className="list-group-item">
            <div className="d-flex justify-content-between">
                <div>
                    {
                        post.isRetuit ?
                        <div className="float-end pe-0">
                            <i className="bi bi-repeat text-secondary"></i>
                        </div> : ``
                    }
                    <div>
                        <img alt="avatar"
                             src={`/images/${post.avatarIcon}`}
                             className="wd-avatar-48px"/>
                    </div>
                </div>
                <div className="ps-2">
                    { post.isRetuit ? <div className="text-secondary fw-bold">{post.retuiter} Retuited</div> : `` }
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <span className="fw-bold">{post.userName} </span>
                            <i className="bi bi-check-circle-fill text-primary"></i>
                            <span className="fw-light text-secondary"> @{post.handle} &#183; {post.time}</span>
                        </div>
                        <a href="#" className="wd-text-decoration-none text-secondary">
                            <i className="bi bi-three-dots"></i>
                        </a>
                    </div>
                    <div className="pb-2">
                        {showTuitText(post.tuitText)}{post.linkTitle === '' && post.link !== '' ? showLinkWithText(post) : ``}
                    </div>
                    <div className="list-group">
                        {
                            post.isComment ?
                            <div className="list-group-item">
                                <img alt="avatar"
                                     src={`/images/${post.commentedTuit.avatarIcon}`}
                                     className="rounded-circle"
                                     height={18}/>
                                <span className="fw-bold"> {post.commentedTuit.userName} </span>
                                <i className="bi bi-check-circle-fill text-primary"></i>
                                <span className="fw-lighter text-secondary"> @{post.commentedTuit.handle} &#183; {post.commentedTuit.time}</span>
                                <div>{post.commentedTuit.tuitText}</div>
                            </div>
                            : ``
                        }
                        {
                            post.tuitImage !== "" && post.tuitImage !== undefined ?
                            <img alt="post_image"
                                 src={`/images/${post.tuitImage}`}
                                 className="list-group-item wd-tuit-image-fill p-0"/>
                                                                                  : ``
                        }
                        {post.linkTitle !== '' ? showLinkWithImage(post) : ``}
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                        <a href="#" className="wd-text-decoration-none text-secondary">
                            <i className="bi bi-chat"></i><span
                            className="ps-2">{post.comments}</span>
                        </a>
                        <a href="#" className="wd-text-decoration-none text-secondary">
                            <i className="bi bi-repeat"></i><span
                            className="ps-2">{post.retuits}</span>
                        </a>
                        <a href="#" className="wd-text-decoration-none text-secondary">
                            <i className="bi bi-heart"></i><span
                            className="ps-2">{post.likes}</span>
                        </a>
                        <a href="#" className="wd-text-decoration-none text-secondary">
                            <i className="bi bi-arrow-bar-up"></i><span className="ps-2"></span>
                        </a>
                    </div>
                    {
                        post.isRetuit ? <div className="text-primary pt-3 pb-2">Show this thread</div> : ``
                    }
                </div>
            </div>
        </div>
    );
};
export default PostItem;