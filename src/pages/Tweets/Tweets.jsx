import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import TweetCardList from 'components/TweetCardList';
 
import { Container, Link, Div } from './Tweets.styled'

import Filters from 'components/Filters';

export const Tweets = () => {
    const {state} = useLocation();
    const {current} = useRef(state?.pathname ?? '/');

    return(
        <Container>
            <Div>
                <Link to={current}>Go back</Link>
                <Filters />
            </Div>
            <TweetCardList /> 
        </Container>
    );
}
export default Tweets;