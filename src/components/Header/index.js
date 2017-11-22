import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.sass';

import Button from '../Button';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__top">
          <h1>Shop</h1>
          <Button onClick={this.handleToggleCart} icon="shopping_cart" />
        </div>
        <div className="header__view">
          <Button onClick={this.handleChangeViewToGallery} icon="view_module" />
          <Button onClick={this.handleChangeViewToGrid} icon="view_list" />
        </div>
      </header>
    );
  }

  handleChangeViewToGallery = () => {
    this.props.changeViewToGallery();
  };

  handleChangeViewToGrid = () => {
    this.props.changeViewToGrid();
  };

  handleToggleCart = () => {
    this.props.toggleCart();
  };
}

Header.propTypes = {
  changeViewToGallery: PropTypes.func,
  changeViewToGrid: PropTypes.func,
  toggleCart: PropTypes.func
};
export default Header;
