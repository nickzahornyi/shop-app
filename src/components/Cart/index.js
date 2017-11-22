import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.sass';
import Item from '../Item';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cart: []
    };
  }

  componentDidMount = () => {
    const savedItems = JSON.parse(localStorage.getItem('cart'));
    if (savedItems) {
      this.setState({ cart: savedItems });
    }
  };

  componentDidUpdate = () => {
    const items = JSON.stringify(this.state.cart);
    localStorage.setItem('cart', items);
  };

  render = () => (
    <div className="cart">
      <h2 className="cart__title">Cart</h2>
      <div className="cart-container">
        {this.state.cart.map(item => (
          <Item
            key={item.id}
            id={item.id}
            category={item.category}
            img={item.img}
            name={item.name}
            price={item.price}
            view={this.props.view}
            cart={true}
            onDelete={this.handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );

  handleDeleteItem = id => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== id)
    });
  };
}

Cart.propTypes = {
  getItemsCount: PropTypes.func,
  view: PropTypes.string
};
export default Cart;
