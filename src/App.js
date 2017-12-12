import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import InputForm from './components/InputForm';


class App extends Component {
  render() {
    return (
      <div id="page">
        <Header />
        <InputForm appliances={this.props.appliances} ></InputForm>

        <Footer></Footer>
      </div>
    );
  }
}
export default App;
