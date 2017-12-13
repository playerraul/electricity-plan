import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import InputForm from './components/InputForm';
import Plan from './components/Plan';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appliancesVal: Array(10).fill(null),
      tariffType: 'single',
      plans: this.props.plans,
      rankPlansView : [],
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
    // get input values, calculate scores and set scores
    

    // alert('submitted: ' + this.state.tariffType + this.state.appliancesVal);
    const tmpRankPlans = [].concat(this.props.plans)
    .sort((a, b) => a.score > b.score)
    .map((item, i) => 
        // <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
        <Plan rank={i+1} plan={item}/>
      );

    this.setState({rankPlansView: tmpRankPlans});
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

        <section class="aliceblue">
          <div class="container page-container-four">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="page-inner-container">

                  {this.state.rankPlansView}

                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
