import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "https://64690068183682d614379841.mockapi.io/";

export const fetchTweets = createAsyncThunk(
    'fetch/tweets',
    async() => {
        try{
            const {data} = await axios.get('/tweets')
            return data;
        }
        catch(e)
        {
            //error
        }
    }
)
export const followingTweet = createAsyncThunk(
    'followingTweet/tweets',
    async({id, followers}) => {
        try{
            const { data } = await axios.put(`/tweets/${id}`, {followers});
            return data;
        }
        catch(e){
            //error
        }
    }
)
export const unfollowingTweet = createAsyncThunk(
    'unfollowingTweet/tweets',
    async({id, followers}) =>{
        try{
            const { data } = await axios.put(`/tweets/${id}`, {followers});
            return data;
        }
        catch(e){
            //error
        }
    }
)