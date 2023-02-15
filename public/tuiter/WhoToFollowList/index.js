import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
        return(`
        <div class="list-group">
        <li class="list-group-item fw-bolder fs-6">Who to follow</li>
        ${
            who.map(user => {
                    return(WhoToFollowListItem(user));
            }).join('')
        }
        </div>
    `);
}

$('#wd-who-to-follow-list').append(`
    ${WhoToFollowList()}
`);
export default WhoToFollowList;