import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import TweetCardList from 'components/TweetCardList';
 
import { Container, Link } from './Tweets.styled'

export const Tweets = () => {
    const {state} = useLocation();
    const {current} = useRef(state?.pathname ?? '/');

    return(
        <Container>
            <Link to={current}>Go back</Link>
            <TweetCardList /> 
        </Container>
    );
}
export default Tweets;