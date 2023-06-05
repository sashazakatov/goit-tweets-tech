export const selectorIsLoading = (state) => state.tweets.isLoading;
export const selectorTweets = (state) => state.tweets.tweets;
export const selectorFollows = (state) => state.tweets.follows;
export const selectorPage = (state) => state.tweets.page;

export const filtredTweetsWithPage = (state) => {
    const page = selectorPage(state);
    const tweets = selectorTweets(state);

    return tweets.filter((_, index) => index < page * 3);
}