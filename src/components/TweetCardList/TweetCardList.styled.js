import styled from "styled-components";

export const TweetList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
`
export const TweetItem = styled.li`
    display: block;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    color: black;
    font-weight: 500;

    &:hover{
        color: white;
        background-color: orangered;
    }
` 