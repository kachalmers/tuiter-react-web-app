const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item wd-font-13px">
            <div class="row">
                <div class="wd-width-50px">
                    <img alt="avatar"
                         src=${who.avatarIcon}
                         class="wd-avatar-40px">
                </div>
                <div class="col">
                    <div>
                        <b>${who.userName} </b><i class="fa fa-check-circle text-primary"></i>
                    </div>
                    <div class="font-weight-light">@${who.handle}</div>
                </div>
                <div class="wd-width-75px d-flex align-items-center ps-0">
                    <button class="btn btn-primary btn-sm wd-pill wd-font-13px">Follow</button>
                </div>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;