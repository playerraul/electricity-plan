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
                  <li>Copyright © 201 UNSW</li>
                  <li>45 B Road NY. USA</li>
                  <li>Tel: 007-123-456</li>
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