import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.sass';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInCart: props.isInCart
    };
  }

  render() {
    const { img, name, price, view, cart } = this.props;
    return (
      <div
        className={view === 'grid' ? 'shop-item shop-item_grid' : 'shop-item'}
        style={
          this.state.isInCart
            ? { border: '1px solid #3344a0' }
            : { border: '1px solid transparent' }
        }
      >
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <div>
            <p>{`${price} $`}</p>
            {cart ? (
              <button onClick={this.handleDeleteFromCart}>Delete</button>
            ) : !this.state.isInCart ? (
              <button onClick={this.handleAddToCart}>Add to cart</button>
            ) : (
              <p className="shop-item__added">Added to cart</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  handleAddToCart = () => {
    const { id, category, img, name, price } = this.props;

    const newItem = {
      id,
      category,
      name,
      img,
      price
    };

    let savedItems = JSON.parse(localStorage.getItem('cart'));
    if (!savedItems) {
      savedItems = [];
    }
    savedItems.push(newItem);

    const items = JSON.stringify(savedItems);
    localStorage.setItem('cart', items);

    this.setState({
      isInCart: true
    });
  };

  handleDeleteFromCart = () => {
    this.props.onDelete(this.props.id);
  };
}

Item.propTypes = {
  view: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  onDelete: PropTypes.func,
  cart: PropTypes.bool,
  isInCart: PropTypes.bool
};
export default Item;
