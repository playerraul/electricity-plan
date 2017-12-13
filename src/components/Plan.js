import React, { Component } from 'react';
import '../App.css';

class Plan extends Component {

  render() {
    const plan = this.props.plan;
    return (
      <div class="price-plan-box lp-border-radius-8">
        <div class="price-plan-box-upper">
          <h1 class="clearfix">
            <span class="pull-left">{plan.name}</span>
            <span class="pull-right">NO.{this.props.rank}</span>
          </h1>
          <p class="clearfix">
            <span class="pull-left">{plan.retailer}</span>
            {/* <span class="pull-right">Duration  30 days</span> */}
          </p>
        </div>
      </div>
    );
  }
}
export default Plan;