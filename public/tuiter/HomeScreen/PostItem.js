import posts from "./posts.js";

const PostItem = (post) => {
    return(`
        <div class="list-group-item wd-bg-color-black wd-font-13px">
            <div class="row">
                <div class="wd-width-60px">
                    <img alt="avatar"
                         src=${post.avatarIcon}
                         class="wd-avatar-48px">
                </div>
                <div class="col">
                    <div class="d-flex flex-row justify-content-between">
                        <div>
                            <span class="fw-bold text-white">${post.userName} </span><i class="fa fa-check-circle text-primary"></i>
                            <span class="fw-lighter text-secondary">@${post.handle} &#183; ${post.time}</span>
                        </div>
                        <a href="#" class="wd-text-decoration-none text-secondary">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                    </div>
                    <div class="text-white">
                        ${post.tuitText}
                    </div>
                    <div class="list-group">
                        <img alt="post_image"
                            src="${post.tuitImage}"
                            class="list-group-item wd-tuit-image-fill p-0">
                    
                        <div class="list-group-item wd-bg-color-black">
                            <div class="text-white">
                                ${post.linkTitle}
                            </div>
                            <div class="text-secondary">
                                ${post.linkText}
                            </div>
                            <div>
                                <a href=${post.link} class="wd-text-decoration-none text-secondary">
                                    <i class="fas fa-link"></i><span class="ps-2">${post.link}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pt-2 pb-2">
                        <a href="#" class="wd-text-decoration-none text-secondary">
                            <i class="far fa-comment"></i><span class="ps-2">${post.comments}</span>
                        </a>
                        <a href="#" class="wd-text-decoration-none text-secondary">
                            <i class="fas fa-retweet"></i><span class="ps-2">${post.retuits}</span>
                        </a>
                        <a href="#" class="wd-text-decoration-none text-secondary">
                            <i class="far fa-heart"></i><span class="ps-2">${post.likes}</span>
                        </a>
                        <a href="#" class="wd-text-decoration-none text-secondary">
                            <i class="fas fa-share-square"></i><span class="ps-2"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `);
}
$('#wd-post-item').append(`
    ${PostItem(posts[0])}
`);
export default PostItem;