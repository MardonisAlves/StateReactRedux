import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React e redux</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Menu
