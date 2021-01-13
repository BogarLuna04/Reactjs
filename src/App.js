import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Pescaderia All Blue</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
