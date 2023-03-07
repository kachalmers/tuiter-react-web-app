import React from "react";
//import postsArray from './posts.json';
//import PostItem from "./post-item";
import TuitList from "../tuits/tuit-list"
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </div>
    );
};
export default HomeComponent;