import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const NavbarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: linear-gradient(to right, #006400, #083B05);
    z-index: 999;
    

`

export const NavbarLink = styled(LinkS)`
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
`

export const NavbarImage = styled.img`
    width: 80px;
    height: 80px;
`

export const NavBarList = styled.ul`
    display: flex;
    margin-left: 100px;

    @media screen and (max-width: 820px){
        display: none;
    }
    
`

export const MobileIcon = styled.div`

display: none;
@media screen and (max-width: 820px){
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
    padding:14px 38px;
    background: #008000;
    border-radius:24px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;

    &:hover{
        background: #fff;
        color: #000;
    }
`