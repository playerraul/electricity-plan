import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="lp-header-overlay"></div>

        <div class="lp-menu-bar">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-xs-6 lp-logo-container">
                <div class="lp-logo">
                  <a href="index.html">
                    {/* <img src="images/logo.png" alt="" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;