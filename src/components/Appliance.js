import React, { Component } from 'react';
import '../App.css';

class Appliance extends Component {
  
  render() {
    const appliance = this.props.appliance;
    return (
      <li>
        <a href="#" class="lp-border-radius-5">
          <span>
            <img src={appliance.image}
              alt={appliance.name} />
            <br /> {appliance.name}
          </span>
        </a>
        <input type="text" name="" value={this.props.value} className="lp-appliance-input" onChange={(e) => this.props.onChange(e)}/>
      </li>
    );
  }
}
export default Appliance;