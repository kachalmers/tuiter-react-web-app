const NavigationSidebar = (active) => {
       return(`
            <div class="list-group pb-2">
                <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active === "home" ? "active" : ""}">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <div><i class="fas fa-home"></i></div>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">Home</div>
                        </div>
                    </div>
                </a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === "explore" ? "active" : ""}">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <div><i class="fas fa-hashtag"></i></div>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">Explore</div>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <div><i class="fas fa-bell"></i></div>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">Notifications</div>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <div><i class="fas fa-envelope"></i></div>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">Messages</div>
                        </div>
                    </div>
                </a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <div><i class="fas fa-bookmark"></i></div>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">Bookmarks</div>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <div><i class="fas fa-list"></i></div>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">Lists</div>
                        </div>
                    </div>
                </a>
                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">Profile</div>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-3">
                            <span class="fa-stack wd-fa-half">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-ellipsis-h fa-stack-1x wd-fg-color-cyborg-list-bg"></i>
                            </span>
                        </div>
                        <div class="col">
                            <div class="d-none d-xl-block">More</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                    class="btn btn-primary btn-block rounded-pill">
                    Tuit
                </a>
            </div>
 `);
}

$('#wd-navigation-sidebar').append(`
       ${NavigationSidebar()}
`);

export default NavigationSidebar;