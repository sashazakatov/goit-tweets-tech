import { Outlet, NavLink, useLocation } from "react-router-dom";

import { Main } from "./SharedLayout.styled";
const SharedLayout = () => {
    const location = useLocation();

    return(
    <>
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/tweets' state={{from: location}}>Tweets</NavLink>
            </nav>  
        </header>
        <Main>
            <Outlet />
        </Main>
    </>
    )
}
export default SharedLayout;