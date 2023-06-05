export const selectorIsLoading = (state) => state.tweets.isLoading;
export const selectorTweets = (state) => state.tweets.tweets;
export const selectorFollows = (state) => state.tweets.follows;
export const selectorPage = (state) => state.tweets.page;
export const selectorFilter = (state) => state.tweets.filter;

export const filtredTweetsWithPage = (state) => {
    const page = selectorPage(state);
    const tweets = filtredFollows(state);

    return tweets.filter((_, index) => index < page * 3);
}
export const filtredFollows = (state) =>{
    const follows = selectorFollows(state);
    const tweets = selectorTweets(state);
    const filter = selectorFilter(state);

    switch(filter){
        case 'all':
            return tweets;
        case 'follow':
            return tweets.filter((tweet) => !follows.includes(tweet.id));
        case 'following':
            return tweets.filter((tweet) => follows.includes(tweet.id));
        default:
            return tweets;
    }
}