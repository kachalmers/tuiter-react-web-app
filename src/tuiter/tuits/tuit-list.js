import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(post =>
                                   <TuitItem
                                       key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default TuitList;