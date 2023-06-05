import { Outlet, useLocation } from "react-router-dom";

import { Main, Navigation, Link, Header } from "./SharedLayout.styled";
const SharedLayout = () => {
    const location = useLocation();

    return(
    <>
        <Header>
            <Navigation>
                <Link to='/'>Home</Link>
                <Link to='tweets' state={{from: location}}>Tweets</Link>
            </Navigation>  
        </Header>
        <Main>
            <Outlet />
        </Main>
    </>
    )
}
export default SharedLayout;