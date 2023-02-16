import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`
        <div class="list-group">
            ${
                posts.map(post => {
                    return(PostItem(post));
                }).join('')
            }
        </div>
    `)
}
$('#wd-post-list').append(`
    ${PostList()}
`);
export default PostList;