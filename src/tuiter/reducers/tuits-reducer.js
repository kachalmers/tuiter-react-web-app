import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

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
                                  ...templateTuit,
                                  ...action.payload,
                                  _id: (new Date()).getTime(),
                              })

            },
            deleteTuit(state, action) {
                const index = state
                    .findIndex(tuit =>
                                   tuit._id === action.payload);
                state.splice(index, 1);
            },
            updateTuit(state, action) {
                const post = state.find((post) => post._id === action.payload._id);
                post.tuit = action.payload.tuit;
            }
        }
    });
export const {likeToggle,createTuit,deleteTuit,updateTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;