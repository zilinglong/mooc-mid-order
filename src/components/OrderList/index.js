import React, { Component } from 'react';
import OrderItem from '../OrderItem';
const data = {
  id: 1,
  shop: '院落创意菜',
  picture: '',
  product: '百香果(冷饮)1扎',
  price: 19.9,
  ifCommented: false
};
class OrderList extends Component {
  render() {
    return (
      <div>
        <OrderItem data={data} />
      </div>
    );
  }
}

export default OrderList;
