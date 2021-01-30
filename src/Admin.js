import React, { Component } from 'react';
import Getprimember from './Primember';

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            logOut: this.props.logOut,
            getPrimember: this.props.getPrimember,
            getOffer: "Prime Member"
        }
    }

    getPrimemberhandler = () =>{
        if(this.state.getPrimember){
            alert("True logical function");
        }else{
            this.setState({getPrimember: true});
            this.setState({getOffer: "Check Offer"})
        }       
    }
    render() {
        return (
            <React.Fragment>
                <h1>Welcome Admin</h1>
                <div>{this.state.getPrimember && <Getprimember />}</div>
                <button onClick={this.state.logOut}>Logout</button> &nbsp;
                <button onClick={this.getPrimemberhandler}>{this.state.getOffer}</button>
            </React.Fragment>
        );
    }
}

export default Admin;