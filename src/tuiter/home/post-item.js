import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const handleOrWord = (hOrW) => {
    if (hOrW.charAt(0)==='@') {
        return(
            hOrW
            //<span className="text-primary wd-text-decoration-none">${hOrW}</span>
        );
    } else {
        return(hOrW);
    }
}

const showTuitText = (tuitText) => {
    const splitText = tuitText.split(' ');
    return(
        <div>
            {`${
                splitText.map(word => {
                    return (handleOrWord(word));
                }).join(' ')
            }
            `}
        </div>
    );
}

const showLinkWithText = (post) => {
    return(
        <a href={'//'+post.link} className="wd-text-decoration-none text-primary">
            <span> {post.link}</span>
        </a>
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
            "retuits": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-2 col-md-1">
                  <img alt="avatar"
                       src={`/images/${post.avatarIcon}`}
                       className="wd-avatar-48px"/>
                </div>
                <div className="col ps-md-4">
                  <div className="d-flex flex-row justify-content-between">
                      <div>
                          <span className="fw-bold">{post.userName} </span>
                          <i className="bi bi-check-circle-fill text-primary"></i>
                          <span
                              className="fw-lighter text-secondary"> @{post.handle} &#183; {post.time}</span>
                      </div>
                      <a href="#" className="wd-text-decoration-none text-secondary">
                          <i className="fas fa-ellipsis-h"></i>
                      </a>
                  </div>
                  <div className="pb-2">
                      {showTuitText(post.tuitText)}{post.linkTitle === '' ? showLinkWithText(post) : ``}
                  </div>
                  <div className="list-group">
                      <img alt="post_image"
                           src={`/images/${post.tuitImage}`}
                           className="list-group-item wd-tuit-image-fill p-0"/>
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
                </div>
            </div>
        </div>
    );
};
export default PostItem;