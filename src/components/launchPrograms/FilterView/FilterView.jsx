import React, { Component } from "react";

import ToggleButton from "../../common/toggleButton/ToggleButton";

export default class FilterView extends Component {
  constructor() {
    super();
    this.state = {
      selectedYear: null,
    };

    this.handleSuccessfullLaunchTrueChanged = this.handleToggleChange.bind(
      this,
      "isSuccessfullLaunch",
      true
    );
    this.handleSuccessfullLaunchFalseChanged = this.handleToggleChange.bind(
      this,
      "isSuccessfullLaunch",
      false
    );
    this.handleSuccessfullLandingTrueChanged = this.handleToggleChange.bind(
      this,
      "isSuccessfullLanding",
      true
    );
    this.handleSuccessfullLandingFalseChanged = this.handleToggleChange.bind(
      this,
      "isSuccessfullLanding",
      false
    );
  }

  componentDidMount() {
    const { onSearch } = this.props;
    onSearch();
  }

  handleYearsFilterSelected(year, isSelected) {
    const { onSearch } = this.props;
    this.setState({ selectedYear: isSelected ? year : undefined }, () => {
      onSearch(this.state);
    });
  }

  renderYears(noOfYears, selectedYear) {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = noOfYears - 1; i >= 0; i--) {
      const year = currentYear - i;
      years.push(
        <ToggleButton
          key={year}
          className="col col-xs-6"
          selected={year === selectedYear}
          onToggle={this.handleYearsFilterSelected.bind(this, year)}
        >
          {year}
        </ToggleButton>
      );
    }

    return years;
  }

  handleToggleChange(field, valueOnSelection, isSelected) {
    const { onSearch } = this.props;
    this.setState(
      { [field]: isSelected ? valueOnSelection : undefined },
      () => {
        onSearch(this.state);
      }
    );
  }

  render() {
    const {
      selectedYear,
      isSuccessfullLaunch,
      isSuccessfullLanding,
    } = this.state;

    return (
      <div className="filter-container">
        <h4>Filters</h4>
        <div className="content">
          <div className="launch-year-filter">
            <h5>Launch Year</h5>
            <div className="row">{this.renderYears(15, selectedYear)}</div>
          </div>
          <div className="successfull-launch-filter">
            <h5>Successfull Launch</h5>
            <div className="row">
              <ToggleButton
                className="col col-xs-6"
                onToggle={this.handleSuccessfullLaunchTrueChanged}
                selected={isSuccessfullLaunch === true}
              >
                True
              </ToggleButton>
              <ToggleButton
                className="col col-xs-6"
                onToggle={this.handleSuccessfullLaunchFalseChanged}
                selected={isSuccessfullLaunch === false}
              >
                False
              </ToggleButton>
            </div>
          </div>
          <div className="successfull-landing-filter">
            <h5>Successfull Landing</h5>
            <div className="row">
              <ToggleButton
                className="col col-xs-6"
                onToggle={this.handleSuccessfullLandingTrueChanged}
                selected={isSuccessfullLanding === true}
              >
                True
              </ToggleButton>
              <ToggleButton
                className="col col-xs-6"
                onToggle={this.handleSuccessfullLandingFalseChanged}
                selected={isSuccessfullLanding === false}
              >
                False
              </ToggleButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
