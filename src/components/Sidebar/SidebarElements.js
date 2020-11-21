import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.div`
    display: grid;
    background: #083B05;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    transition: 0.2s ease-in-out;
    z-index: 999;
    opacity: ${({ isOpen}) => isOpen ? "100%" : "0"};
    top: ${({ isOpen}) => isOpen ? "0" : "-100%"};
`

export const Icon = styled.div`
    color: #fff;
    font-size: 2rem;
    position: absolute;
    background: transparent;
    top: 1.2rem;
    right: 1.4rem;
    cursor: pointer;
`




