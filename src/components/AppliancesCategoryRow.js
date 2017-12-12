import React, { Component } from 'react';
import '../App.css';
import Appliance from './Appliance';

class AppliancesCategoryRow extends Component {
  render() {
    const category = this.props.category;
    const appliances = [];

    this.props.appliances.forEach((appliance) => {
      appliances.push(
        <Appliance
          appliance={appliance}
          key={appliance.name} />
      );
    });

    return (
      <ul class="lp-home-categoires padding-left-0 margin-bottom-20">
        <h3>{category}</h3>
        {appliances}
      </ul>
    );
  }
}
export default AppliancesCategoryRow;