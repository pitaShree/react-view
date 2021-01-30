import React, { Component } from 'react';
import Header from './componentfolder/Header';
import Footer from './componentfolder/Footer';
import Home from './layouts/Home';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                    <Home />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;