import posts from "./posts.js";

const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col">
                    <div class="text-secondary">${post.topic}</div>
                    <div>
                        <b>${post.userName}</b> <i class="fa fa-check-circle text-primary"></i>
                        <span class="text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="font-weight-bold">${post.title}</div>
                </div>
                <div class="wd-width-120px">
                    <img alt="post_image"
                         src=${post.image}
                         class="wd-post-summary-image">
                </div>
            </div>
        </div>
    `);
}
$('#wd-post-summary-item').append(`
    ${PostSummaryItem(posts[0])}
`);
export default PostSummaryItem;