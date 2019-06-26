import React, { Component } from 'react';
import './style.css';
class OrderItem extends Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
      editing: false
    };
  }
  render() {
    const { product, shop, price, picture, ifCommented } = this.props.data;
    return (
      <div>
        <div className="orderItem">
          <div className="orderItem__picContainer">
            <img src={picture} alt="" className="orderItem__pic" />
          </div>
          <div className="orderItem__content">
            <div className="orderItem__product">{product}</div>
            <div className="orderItem__shop">{shop}</div>
            <div className="orderItem__detail">
              <div className="orderItem__price">{price}</div>
              <div>
                {ifCommented ? (
                  <button className="orderItem__btn-grey"> 已评价</button>
                ) : (
                  <button className="orderItem__btn-red"> 评价</button>
                )}
              </div>
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    );
  }
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          className="orderItem__comment"
          name=""
          id=""
          cols="30"
          rows="10"
        />
        {this.renderStars()}
        <button className="orderItem__btn-red">提交</button>
        <button className="orderItem__btn-grey">取消</button>
      </div>
    );
  }
  renderStars() {
    const { stars } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, idx) => {
          const light = stars > item ? 'orderItem__btn-red' : '';
          return <span key={idx}>★</span>;
        })}
      </div>
    );
  }
}

export default OrderItem;
