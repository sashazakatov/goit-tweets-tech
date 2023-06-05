import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, unfollowingTweet, followingTweet } from './operations'


import storage from 'redux-persist/lib/storage'

const initialState = {
    tweets: [],
    follows: [],
    filter: 'all',
    isLoading: false,
    page: 1,
}

const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {
        incrementPage(state) {
            if (state.page * 3 >= state.tweets.length){
                return state;
            }
            state.page += 1;
        },
        resetPage(state){
            state.page = 1;
        },
        changeFilter(state, actions){
            state.filter = actions.payload;
        }
    },
    extraReducers:(bilder) => {
        bilder
            .addCase(fetchTweets.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTweets.fulfilled, (state, actions) => {
                state.isLoading = false;
                state.tweets = actions.payload; 
            })
            .addCase(fetchTweets.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(followingTweet.fulfilled, (state, actions) => {
                const { payload } = actions;
                state.tweets = state.tweets.map(tweet => {
                    if (tweet.id === payload.id) {
                        return payload;
                    }
                    return tweet;
                });
                state.follows.push(payload.id);
            })
            .addCase(unfollowingTweet.fulfilled, (state, actions) => {
                const { payload } = actions;
                state.tweets = state.tweets.map((tweet) => {
                    if (tweet.id === payload.id) {
                      return payload;
                    }
                    return tweet;
                });
                state.follows = state.follows.filter((follow) => follow !== payload.id);
            })
    }
})

export const tweetsPersistConfig = {
    key: 'follows',
    storage,
    whitelist: ['follows'],
}

export const tweetsReducer = tweetsSlice.reducer;
export const { incrementPage, changeFilter, resetPage } = tweetsSlice.actions;