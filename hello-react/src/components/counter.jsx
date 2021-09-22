import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import { Button, Container } from 'react-bootstrap';

class Counter extends Component {
    render () { 
        return ( <div className="container">
            <Button className="primary">Incriment</Button>
        </div> );
    }
}
 
export default Counter;