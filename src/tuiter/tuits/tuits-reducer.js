import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
        name: 'tuits',
        initialState: tuits,
        reducers: {
            likeToggle(state, action) {
                const post = state.find((post) => post._id === action.payload)
                console.log(action.payload);
                console.log(post.liked);
                if (post.liked) {
                    post.liked = false   // unlike
                    post.likes--;
                } else {
                    post.liked = true    // like
                    post.likes++;
                }
            },
            createTuit(state, action) {
                state.unshift({
                                  ...action.payload,
                                  ...templateTuit,
                                  _id: (new Date()).getTime(),
                              })

            },
            deleteTuit(state, action) {
                console.log(action.payload)
                console.log(state);
                const index = state
                    .findIndex(tuit =>
                                   tuit._id === action.payload);
                state.splice(index, 1);
            }
        }
    });
export const {likeToggle,createTuit,deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;