import logo from './logo.svg';
import React, {Component} from 'react';
import  { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component{

    render(){
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">My Restaurant</NavbarBrand>
                </div>
                </Navbar>
                <Menu />
            </div>
          );
    }

}

export default App;
