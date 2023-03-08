import { createSlice } from "@reduxjs/toolkit";
import profileObject from "../data/profile.json";

const profileSlice = createSlice({
        name: "profile",
        initialState: profileObject,
        reducers: {
            saveNewProfile(state,action) {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.bio = action.payload.bio;
                state.location = action.payload.location;
                state.website = action.payload.website;
                state.dateOfBirth = action.payload.dateOfBirth;
            }
        }
    });
export const {saveNewProfile} = profileSlice.actions;
export default profileSlice.reducer;