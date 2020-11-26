import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const NavbarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    background: linear-gradient(to right, #006400, #083B05);
    z-index: 999;

    @media screen and (max-width: 740px){
        justify-content: space-between;
    }
    

`

export const NavbarLink = styled(LinkS)`
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #E8D4D1;
        transition: 0.4s ease-in-out;
    }
`

export const NavbarImage = styled.img`
    width: 60px;
    height: 60px;
`

export const NavBarList = styled.ul`
    display: flex;
    margin-left: 100px;

    @media screen and (max-width: 740px){
        display: none;
    }
    
`

export const MobileIcon = styled.div`

display: none;
@media screen and (max-width: 740px){
        display: block;
        color: #fff;
        font-size: 2.5rem;
        cursor: pointer;
    }
    
`

export const NavbarItem = styled.li`
    margin-left: 40px;
    font-family: 'Lato', sans-serif;
`

export const Buttom = styled(LinkS)`
    padding:14px 18px;
    background: #008000;
    border-radius:24px;
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    transition: 0.4s ease-in-out;

    &:hover{
        transition: 0.4s ease-in-out;
        background: #008C00;
    }

    @media screen and (max-width: 740px){
        display: none;
    }


`

export const NavButton = styled.div`
    color: #fff;
`