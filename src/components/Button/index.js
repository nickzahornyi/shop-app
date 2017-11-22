import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.sass';
class Button extends Component {
  render() {
    return (
      <button onClick={this.handleClick} className="button">
        <i className="material-icons">{this.props.icon}</i>
      </button>
    );
  }

  handleClick = () => {
    this.props.onClick();
  };
}

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;
