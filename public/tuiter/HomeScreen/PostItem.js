import posts from "./posts.js";

const handleOrWord = (hOrW) => {
    if (hOrW.charAt(0)==='@') {
        return(`<a href="../profile.html" class="text-primary wd-text-decoration-none">${hOrW}</a>`);
    } else {
        return(hOrW);
    }
}

const showTuitText = (tuitText) => {
    const splitText = tuitText.split(' ');
    return(`
        ${
            splitText.map(word => {
                return(handleOrWord(word));
            }).join(' ')
        }
    `)
}

const showLinkWithText = (post) => {
    return(`
        <a href=${'//'+post.link} class="wd-text-decoration-none text-primary">
            <span> ${post.link}</span>
        </a>
    `);
}

const showLinkWithImage = (post) => {
    return(`
        <div class="list-group-item wd-bg-color-black">
            <div class="text-white">
                ${post.linkTitle}
            </div>
            <div class="text-secondary">
                ${post.linkText}
            </div>
            <div>
                <a href=${'//'+post.link} class="wd-text-decoration-none text-secondary">
                    <i class="fas fa-link"></i><span class="ps-2">${post.link}</span>
                </a>
            </div>
        </div>
    `);
}

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
                    <div class="text-white pb-2">
                        ${showTuitText(post.tuitText)}${post.linkTitle === '' ? showLinkWithText(post) : ``}
                    </div>
                    <div class="list-group">
                        <img alt="post_image"
                            src="${post.tuitImage}"
                            class="list-group-item wd-tuit-image-fill p-0">
                            ${post.linkTitle !== '' ? showLinkWithImage(post) : ``}
                    </div>
                    <div class="d-flex justify-content-between pt-2">
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