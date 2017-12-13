import React, { Component } from 'react';
import '../App.css';
import AppliancesPanel from './AppliancesPanel';

class InputForm extends Component {

  render() {
    return (
      <div>
        <AppliancesPanel
          appliances={this.props.appliances}
          appliancesVal={this.props.appliancesVal}
          onChange={(i,e) => this.props.onChange(i,e)} />
        <div class="lp-home-banner-contianer">
          <div class="lp-home-banner-contianer-inner">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-xs-10 col-md-offset-3 col-sm-offset-1">
                  <div class="lp-search-bar">

                    <div class="lp-search-bar-left">
                      <div class="ui-widget border-dropdown">
                        Tariff type
                        <select className="" value={this.props.tariffType} onChange={(e) => this.props.onSelect(e)}>
                          <option value="single">Single rate</option>
                          <option value="time">Time of use</option>
                          <option value="both">Not sure</option>
                        </select>
                      </div>
                    </div>

                    <div className="lp-search-bar-right">
                      <button className="lp-search-btn" onClick={this.props.onSubmit} >Submit</button>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
export default InputForm;