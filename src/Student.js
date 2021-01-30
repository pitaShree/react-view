import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
        <li style={this.props.style}>{this.props.id} {this.props.name} {this.props.roll}</li>
        )
    }
}

export default Student;