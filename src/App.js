import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppliancesPanel from './components/AppliancesPanel';


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
                  <div class="col-md-8 col-xs-12 col-md-offset-2 col-sm-offset-0">
                    <div class="lp-search-bar">
                      <form method="post" action="listing.html">
                        <div class="lp-search-bar-left">

                          <div class="ui-widget border-dropdown">
                            <select class="comboboxs">
                              <option value="">Select one...</option>
                              <option value="single">single rate</option>
                              <option value="time">time of use</option>
                              <option value="both">both</option>
                            </select>
                          </div>
                        </div>
                        <div class="lp-search-bar-right">
                          <input type="submit" value="Search" class="lp-search-btn" />
                          <i class="icons8-search lp-search-icon"></i>
                        </div>
                        <div class="clearfix"></div>

                      </form>
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
