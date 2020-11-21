import React, { useState } from 'react'
import Navbar from '../components/Navbar/index'
import Sidebar from '../components/Sidebar/index'

const Home = () => {

    const [isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </div>
    )
}

export default Home
