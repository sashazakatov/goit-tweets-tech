import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTweets } from 'store/tweets/operations'

import { selectorIsLoading, filtredTweetsWithPage } from 'store/tweets/selectors'

import TweetCard from "components/TweetCard";
import Loader from "components/Loader";

import { incrementPage } from 'store/tweets/slice'

import { TweetList, TweetItem } from './TweetCardList.styled'

const TweetCardList = () => {
    const isLoading = useSelector(selectorIsLoading);
    const dispatch = useDispatch();
    const filtredTweets = useSelector(filtredTweetsWithPage);

    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch])

    return(
        <>
        { isLoading ? <Loader /> : 
        <TweetList>
            {filtredTweets.map((tweet) => 
                <TweetItem key={tweet.id}>
                    <TweetCard tweet={tweet}/>
                </TweetItem>)}
        </TweetList>}
        <button 
            type="button"
            onClick={() => dispatch(incrementPage())}
        >
            load more
        </button>
        </>
    )
}
export default TweetCardList;