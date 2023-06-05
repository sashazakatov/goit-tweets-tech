import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const Container = styled.section`
    width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
`
export const Link = styled(NavLink)`
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    color: black;
    font-weight: 500;
    margin-bottom: 30px;

    &:hover{
        color: white;
        background-color: orangered;
    }
`;