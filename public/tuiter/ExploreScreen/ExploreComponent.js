import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="d-flex align-items-center justify-content-between pb-2 position-relative">
            <div class="position-absolute">
                <i class="fas fa-search ps-3"></i>
            </div>
            <div class="flex-fill pe-4">
                <input type="text"
                    class="form-control wd-pill ps-5"
                    placeholder="Search Tuiter">
            </div>
            <div>
                <a href="explore-settings.html"><i class="fas fa-cog wd-font-30px text-primary"></i></a>
            </div>
        </div>
        <ul class="nav nav-tabs d-flex">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="d-flex position-relative pt-2">
            <img class="wd-width-100pc pb-2"
                 src="https://media.cnn.com/api/v1/images/stellar/prod/230125135516-rublev-djokovic.jpg?c=16x9&q=h_720,w_1280,c_fill"
                 alt="explore_image">
            <div class="position-absolute fixed-bottom px-2 pb-1 text-dark wd-font-bold">
                <div class="wd-font-13px fw-light">
                    Tennis Tournament &#xb7; LIVE
                </div>
                <div class="fs-4 fw-bold">
                    Australian Open 2023
                </div>
            </div>
        </div>
        ${PostSummaryList()}
    `);
}
$('#wd-explore-component').append(`
    ${ExploreComponent()}
`);
export default ExploreComponent;
