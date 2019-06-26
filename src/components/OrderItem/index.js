import React, { Component } from 'react';
import './style.css';
class OrderItem extends Component {
  constructor() {
    super();
    this.state = {
      // stars: this.props.data.stars || 0,
      stars: 0,
      editing: false,
      // textareaContent: this.props.data.comment || ''
      textareaContent: ''
    };
    this.comment = this.comment.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.textareaChange = this.textareaChange.bind(this);
  }
  textareaChange(e) {
    this.setState({
      textareaContent: e.target.value
    });
  }
  comment(e) {
    e.preventDefault();
    this.setState({
      editing: true
    });
  }
  submit() {
    const { id } = this.props.data;
    const { textareaContent, stars } = this.state;
    console.log('area content:', this.state.textareaContent);
    this.setState({
      editing: false
    });
    this.props.onSubmitEvent(id, textareaContent, stars);
  }
  cancel() {
    this.setState({
      editing: false,
      textareaContent: this.props.data.comment || '',
      stars: this.props.data.stars || 0
    });
  }
  starClick(stars) {
    this.setState({
      stars: stars
    });
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
                  <button className="orderItem__btn-red" onClick={this.comment}>
                    {' '}
                    评价
                  </button>
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
          value={this.state.textareaContent}
          onChange={this.textareaChange}
          className="orderItem__comment"
          name=""
          id=""
          cols="30"
          rows="10"
        />
        {this.renderStars()}
        <button className="orderItem__btn-red" onClick={this.submit}>
          提交
        </button>
        <button className="orderItem__btn-grey" onClick={this.cancel}>
          取消
        </button>
      </div>
    );
  }
  renderStars() {
    const { stars } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, idx) => {
          const lightClass = stars >= item ? 'orderItem__btn-red' : '';
          return (
            <span className={lightClass} key={idx} onClick={this.starClick.bind(this, item)}>
              ★
            </span>
          );
        })}
      </div>
    );
  }
}

export default OrderItem;
