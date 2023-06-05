import { Card, Div, Button, Image, IconLogo, Icon, Logo, DivInformation, UserImage } from './TweetCard.styled'
import { useDispatch, useSelector } from 'react-redux';
import { followingTweet, unfollowingTweet } from 'store/tweets/operations'

import {selectorFollows} from 'store/tweets/selectors'

const TweetCard = ({tweet}) => {
    const { user, tweets, followers, avatar, id } = tweet;
    const follows = useSelector(selectorFollows);
    const dispatch = useDispatch();

    const isInclude = follows.includes(id.toString());

    const handelClick = (id) => {
        if(isInclude){
            dispatch(unfollowingTweet({id, followers: followers - 1}));
        }
        else{
            dispatch(followingTweet({id, followers: followers + 1}));
        }
    }

    return(
        <Card>
            <Logo />
            <Image />
            <DivInformation>
            <Icon>
                <IconLogo>
                    <UserImage src={avatar} alt={user} />
                </IconLogo>
            </Icon>
            <Div>
                <p>{tweets} tweets</p>
                <p>{followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Followers</p>
            </Div>
            <Button 
                type='buttom'
                style={ isInclude ? {backgroundColor: "#5CD3A8",} : {}}
                onClick={() => handelClick(id)}
            >
                {isInclude ? "Following" : "Follow" }
            </Button>
            </DivInformation>
        </Card>
    );
}
export default TweetCard;