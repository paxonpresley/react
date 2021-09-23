import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
    render() { 
        const count = 0;
        function Incriment() {
            if ( count === 0) {
                count = 'Zero';
            }
        }
        return <div className="container">
            <h1>COUNTER!</h1>
            <Button className="primary">Click Me</Button>
            <span> { Incriment() } </span>
        </div>;
    }
}
 
export default App;