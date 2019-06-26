import React, { Component } from 'react';
import OrderItem from '../OrderItem';
class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.submitEvent = this.submitEvent.bind(this);
  }
  componentDidMount() {
    fetch('/mock/orders.json').then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          });
        });
      }
    });
  }
  submitEvent(id, comment, stars) {
    const newData = this.state.data.map(item => {
      return item.id === id
        ? {
            ...item,
            comment,
            stars,
            ifCommented: true
          }
        : item;
    });
    this.setState({
      data: newData
    });
  }
  render() {
    return (
      <div>
        {this.state.data.map((item, idx) => (
          <OrderItem key={idx} data={item} onSubmitEvent={this.submitEvent} />
        ))}
      </div>
    );
  }
}

export default OrderList;
