import React, { Component } from 'react';
import '../App.css';
import AppliancesPanel from './AppliancesPanel';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { tariffType: 'single' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({tariffType: event.target.value });
  }

  handleSubmit(event) {
    alert('submitted: ' + this.state.tariffType);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <AppliancesPanel appliances={this.props.appliances} />
        <div class="lp-home-banner-contianer">
          <div class="lp-home-banner-contianer-inner">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-xs-10 col-md-offset-3 col-sm-offset-1">
                  <div class="lp-search-bar">

                    <div class="lp-search-bar-left">
                      <div class="ui-widget border-dropdown">
                        Tariff type 
                        <select className="" value={this.state.tariffType} onChange={this.handleChange}>
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