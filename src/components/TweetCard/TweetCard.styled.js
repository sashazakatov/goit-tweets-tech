import styled from "styled-components";
import logo from 'assets/images/logo.svg'
import picture from 'assets/images/picture.png'

export const Card = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54%, #4B2A99 79%);
    box-shadow: -2.5px 6.8px 21px rgba(0, 0, 0, 0.23);

    border-radius: 20px;

    height: 460px;
    width: 380px;

    font-font-weight: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: #EBD8FF;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
export const Icon = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
&::before {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    width: 380px;
    height: 8px;
    content: "";
    z-index: 0;
  } 
`
export const IconLogo = styled.div`
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
border: 8px solid #EBD8FF;
border-radius: 50%;
border-radius: 50%;
width: 60px;
height: 60px;
z-index: 1;
`

export const Button = styled.button`
    background: #EBD8FF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 28px;
    width: 196px;
    height: 50px;
    border: none;
    font-weight: 600;
`
export const Image = styled.div`
    position: absolute;
    top: 28px;
    left: 36px;
    width: 308px;
    height: 168px;
    background: url(${picture}) no-repeat;
`
export const Logo = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
    background: url(${logo}) no-repeat;
`;
export const DivInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 26px;
    margin-top: 178px;
`
export const UserImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`