import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppliancesPanel from './components/AppliancesPanel';
import Submit from './components/Submit';


class App extends Component {
  render() {
    return (
      <div id="page">
          <Header/>
          
          <AppliancesPanel appliances={this.props.appliances} />

          <div class="lp-home-banner-contianer">
            <div class="lp-home-banner-contianer-inner">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 col-xs-10 col-md-offset-3 col-sm-offset-1">
                    <div class="lp-search-bar">
                        <div class="lp-search-bar-left">
                          <div class="ui-widget border-dropdown">
                            <select class="comboboxs">
                              <option value="">Select one...</option>
                              <option value="single">single rate</option>
                              <option value="time">time-of-use</option>
                              <option value="both">both</option>
                            </select>
                          </div>
                        </div>

                        <Submit></Submit>
                        <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
	    </div>
      );
  }
}
export default App;
