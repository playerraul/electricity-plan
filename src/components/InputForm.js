import React, { Component } from 'react';
import '../App.css';
import AppliancesPanel from './AppliancesPanel';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appliancesVal: Array(10).fill(null),
      tariffType: 'single',
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    alert('submitted: ' + this.state.tariffType + this.state.appliancesVal);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <AppliancesPanel
          appliances={this.props.appliances}
          appliancesVal={this.state.appliancesVal}
          onChange={(i,e) => this.handleChange(i,e)} />
        <div class="lp-home-banner-contianer">
          <div class="lp-home-banner-contianer-inner">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-xs-10 col-md-offset-3 col-sm-offset-1">
                  <div class="lp-search-bar">

                    <div class="lp-search-bar-left">
                      <div class="ui-widget border-dropdown">
                        Tariff type
                        <select className="" value={this.state.tariffType} onChange={this.handleSelect}>
                          <option value="single">Single rate</option>
                          <option value="time">Time of use</option>
                          <option value="both">Not sure</option>
                        </select>
                      </div>
                    </div>

                    <div className="lp-search-bar-right">
                      <input type="submit" value="Submit" className="lp-search-btn" />
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default InputForm;