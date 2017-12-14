import React, { Component } from 'react';
import '../App.css';

class Plan extends Component {

  render() {
    const plan = this.props.plan;
    return (
      <div class="price-plan-box lp-border-radius-8">
        <div class="price-plan-box-upper">
          <h3 class="clearfix lp-color-white">
            <span class="pull-left">{plan.name}</span>
            <span class="pull-right">NO. {this.props.rank}</span>
          </h3>
          <p class="clearfix">
            <span class="pull-left">{plan.retailer}</span>
            <span class="pull-right">{plan.type}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Plan;