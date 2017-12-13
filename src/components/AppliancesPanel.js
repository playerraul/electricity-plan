import React, { Component } from 'react';
import '../App.css';
import Appliance from './Appliance';

class AppliancesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appliances: Array(10).fill(null),
        };
    }
    handleChange(i, event) {
        // alert(i);
        // alert(event.target.value);
        const appliances = this.state.appliances.slice();
        appliances[i] = event.target.value;
        this.setState({ appliances: appliances });
    }

    renderAppliance(i) {
        return (
            <Appliance
                appliance={this.props.appliances[i]}
                key={this.props.appliances[i].name}
                onChange={(e) => this.handleChange(i,e)} />
        );
    }

    render() {
        return (
            <div class="lp-section-row">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="text-center lp-search-description">
                                <p className="lp-banner-browse-txt">Tell us your habbit of electricity</p>
                                <img src="images/banner/banner-arrow.png" alt="banner-arrow" class="banner-arrow" />
                            </div>
                            <br />
                            <ul class="lp-home-categoires padding-left-0 margin-bottom-20">
                                <h3>Kitchen</h3>
                                {this.renderAppliance(0)}
                                {this.renderAppliance(1)}
                                {this.renderAppliance(2)}
                                {this.renderAppliance(3)}
                            </ul>
                            <ul class="lp-home-categoires padding-left-0 margin-bottom-20">
                                <h3>Laundry</h3>
                                {this.renderAppliance(4)}
                                {this.renderAppliance(5)}
                            </ul>
                            <ul class="lp-home-categoires padding-left-0 margin-bottom-20">
                                <h3>General</h3>
                                {this.renderAppliance(6)}
                                {this.renderAppliance(7)}
                                {this.renderAppliance(8)}
                                {this.renderAppliance(9)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AppliancesPanel;