import React, { Component } from 'react';
import '../../App.css';

class Footer extends Component {
  render() {
    return (
        <footer class="text-center">
        <div class="footer-bottom-bar">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <ul class="footer-about-company">
                  <li>Copyright © 2017 UNSW</li>
                  <li>SYDNEY</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
}
export default Footer;