import React from 'react'
import { NavbarContainer, 
    NavbarLink, 
    NavbarImage,
    NavBarList,
    NavbarItem,
    Buttom,
    MobileIcon
} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({ toggle}) => {
    return (
        <>
            <NavbarContainer>
                <NavbarLink to="/"><NavbarImage src="https://i.ibb.co/0DXg0CV/logo1.png" /></NavbarLink>
                <NavBarList>
                    <NavbarItem><NavbarLink to="servicos">Servicos</NavbarLink></NavbarItem>
                    <NavbarItem><NavbarLink to="/">Sobre nos</NavbarLink></NavbarItem>
                    <NavbarItem><NavbarLink to="/">Contato</NavbarLink></NavbarItem>
                    <NavbarItem><Buttom to="/">Faca um orcamento</Buttom></NavbarItem>
                </NavBarList>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </NavbarContainer>
        </>
    )
}

export default Navbar
