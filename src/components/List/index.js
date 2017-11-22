import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import './style.sass';

import Item from '../Item';

class List extends Component {
  render() {
    return (
      <div className="list">
        <SwipeableViews
          enableMouseEvents={true}
          animateHeight={true}
          animateTransitions={true}
          onChangeIndex={this.handleScrollTop}
          axis="x"
        >
          {this.handleGetCategories(this.props.data).map((item, index) => (
            <div key={index}>
              <h2>{item}</h2>
              <div className="list-container">
                {this.props.data
                  .filter(category => item === category.category)
                  .map(item => (
                    <Item
                      key={item.id}
                      id={item.id}
                      category={item.category}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      view={this.props.view}
                      isInCart={this.handleIsInCart(item.id)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </SwipeableViews>
      </div>
    );
  }

  handleGetCategories = arr => {
    const categories = [];
    arr.forEach(item => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      } else {
        return false;
      }
    });
    return categories;
  };

  handleIsInCart = id => {
    const savedItems = JSON.parse(localStorage.getItem('cart')) || [];
    let isInCart = false;

    savedItems.forEach(item => {
      if (item.id === id) {
        isInCart = true;
      } else {
        return false;
      }
    });

    return isInCart;
  };

  handleScrollTop = () => {
    var container = document.querySelector('.list');
    scrollToTop(container);
    function scrollToTop(container) {
      var difference = 0 - container.scrollTop;
      var perTick = difference / 100 * 10;

      setTimeout(function() {
        container.scrollTop = container.scrollTop + perTick;
        if (container.scrollTop == 0) return;
        scrollToTop(container);
      }, 10);
    }
  };
}

List.propTypes = {
  data: PropTypes.array,
  view: PropTypes.string
};
export default List;
