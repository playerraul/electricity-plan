import React, { Component } from 'react';
import '../App.css';
import AppliancesCategoryRow from './AppliancesCategoryRow';

class AppliancesPanel extends Component {
    render() {
        const categoryRows = [];

        this.props.appliances.forEach((categoryObj) => {
            categoryRows.push(
                <AppliancesCategoryRow
                    category={categoryObj.category}
                    appliances={categoryObj.appliances} />
            );
        });

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
                            {categoryRows}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AppliancesPanel;