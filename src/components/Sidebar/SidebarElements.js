import styled from 'styled-components'

export const SidebarContainer = styled.div`
    display: grid;
    background: #010101;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    transition: 0.2s ease-in-out;
    z-index: 999;
    opacity: ${({ isOpen}) => isOpen ? "100%" : "0"};
`

export const Icon = styled.div`
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 1.2rem;
    right: 1.4rem;
    cursor: pointer;
`