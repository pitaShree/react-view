import React, { Component } from 'react';
import CustomComponent from './Custom';
export const MyContext = React.createContext();

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'Rahul',
      roll: 101
    }
  }

  handleButton = () => {
    this.setState({roll: this.state.roll +1});
  }
  render() {
    return (
      <MyContext.Provider value={this.state}>
        <h1>App Component</h1>
        <CustomComponent />
      </MyContext.Provider >
    );
  }
}

export default App;