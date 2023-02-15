import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
        <div class="list-group wd-font-13px">
            ${
                posts.map(post=> {
                    return(PostSummaryItem(post));
                }).join('')
            }
        </div>
    `)
}
$('#wd-post-summary-list').append(`
    ${PostSummaryList()}
`);
export default PostSummaryList;