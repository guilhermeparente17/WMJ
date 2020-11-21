import React from 'react'
import { SidebarContainer, 
    Icon
} from './SidebarElements'
import { FaTimes } from 'react-icons/fa'

const index = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} >
                <Icon onClick={toggle}>
                    <FaTimes />
                </Icon>
            </SidebarContainer>

        </>
    )
}

export default index
