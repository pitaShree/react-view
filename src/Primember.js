import React, { Component } from 'react';
import {MyContext} from './App';

class Primember extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {data => <h2>{console.log(data)}</h2>}
            </MyContext.Consumer>
        );
    }
}

export default Primember;