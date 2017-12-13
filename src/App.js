import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import InputForm from './components/InputForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appliancesVal: Array(10).fill(null),
      tariffType: 'single',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
    const appliancesVal = this.state.appliancesVal.slice();
    appliancesVal[i] = event.target.value;
    this.setState({
      appliancesVal: appliancesVal,
    });
  }

  handleSelect(event) {
    this.setState({ tariffType: event.target.value });
  }

  handleSubmit() {
    alert('submitted: ' + this.state.tariffType + this.state.appliancesVal);
    // why doesn't work, still refresh page!!! ??
    // event.preventDefault();
  }

  render() {
    return (
      <div id="page">
        <Header />
        <InputForm
          appliances={this.props.appliances}
          appliancesVal={this.state.appliancesVal}
          tariffType={this.state.tariffType}
          onChange={(i, e) => this.handleChange(i, e)}
          onSelect={(e) => this.handleSelect(e)}
          onSubmit={() => this.handleSubmit()}
        />

        <Footer></Footer>
      </div>
    );
  }
}
export default App;
