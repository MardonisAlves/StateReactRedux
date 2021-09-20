import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import ListaBeneficiarios from '../relatorio/listaBeneficiarios/listaBeneficiarios';
import App from '../main/App';
class Menu extends Component {
    render() {
        return (
        
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React e redux</Navbar.Brand>
                <Router>
           
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/lista/1">Bneficios</Link>
                    </li>
                </ul>
           

            <Switch>
                  
                <Route path="/lista/:id"  component={ListaBeneficiarios} />
            </Switch>
            </Router>
                </Navbar>
            </div>



        )
    }
}

export default Menu
