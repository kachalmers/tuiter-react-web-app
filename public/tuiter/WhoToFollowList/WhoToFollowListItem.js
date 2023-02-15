const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="wd-width-60px">
                    <img alt="avatar"
                         src=${who.avatarIcon}
                         class="wd-explore-avatar">
                </div>
                <div class="col">
                    <b>${who.userName} </b><i class="fa fa-check-circle text-primary"></i>
                    <div class="fw-lighter">@${who.handle}</div>
                </div>
                <div class="wd-width-85px d-flex align-items-center">
                    <button class="btn btn-primary btn-sm wd-pill wd-font-13px">Follow</button>
                </div>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;