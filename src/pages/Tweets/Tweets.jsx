import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import TweetCardList from 'components/TweetCardList';
 
import { Container } from './Tweets.styled'

export const Tweets = () => {
    const {state} = useLocation();
    const {current} = useRef(state?.pathname ?? '/');

    return(
        <Container>
            <NavLink to={current}>Go back</NavLink>
            <TweetCardList /> 
        </Container>
    );
}
export default Tweets;