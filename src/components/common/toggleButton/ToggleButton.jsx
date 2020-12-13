import React, { Component } from "react";

import "./ToggleButton.css";

export default class ToggleButton extends Component {
  constructor(props) {
    super(props);
    // this.state ={
    //     selected : props.selected || false,
    // }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState(
    //     ({selected}) => ({selected: !selected}),
    //     ()=> {
    //         if(this.props.onToggle) {
    //             this.props.onToggle(this.state.selected);
    //         }
    //     }
    // );
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.selected);
    }
  }

  render() {
    const { children, className, selected, ...otherProps } = this.props;
    // const { selected } = this.state;
    return (
      <button
        className={`toggle-button ${className}${selected ? " selected" : ""}`}
        onClick={this.handleClick}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}
