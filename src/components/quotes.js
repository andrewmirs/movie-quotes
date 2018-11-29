import React, { Component } from 'react';
import auth from '../hoc/auth';

class Quotes extends Component {
    
    render(){
        return (
            <div>
                <h1 className="center">Movie Quote</h1>
                <h5>Pu$&ys on the pavement fellas!</h5>
            </div>
        );
    }
}

export default auth(Quotes);

