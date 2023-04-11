import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light", 
    user: null,
    token: null,
    posts: []
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // functions that involve modifying the global state
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; // if light, turn dark, else turn light
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends; // set the friends as long as the user exists
            } else {
                console.error("user friends non-existent :(")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts; 
        }
    }
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;