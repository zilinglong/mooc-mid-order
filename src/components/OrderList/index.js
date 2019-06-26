import React, { Component } from 'react';
import OrderItem from '../OrderItem';
const data = [
  {
    id: 1,
    shop: '院落创意菜',
    picture: '',
    product: '百香果（冷饮）1扎',
    price: 19.9,
    ifCommented: false
  },
  {
    id: 2,
    shop: '正一味',
    picture: '',
    product: '肥牛石锅拌饭+鸡蛋羹一份',
    price: 25,
    ifCommented: false
  },
  {
    id: 3,
    shop: '冻酸奶',
    picture: '',
    product: '冻酸奶（小杯)一杯',
    price: 8,
    ifCommented: true
  },
  {
    id: 4,
    shop: '吉野家',
    picture: '',
    product: '鸡汁烧鱼+中杯汽水/紫菜蛋花汤',
    price: 20,
    ifCommented: true
  }
];
// const data = [
//   {
//     id: 1,
//     shop: '院落创意菜1',
//     picture: '',
//     product: '百香果(冷饮)1扎',
//     price: 19.9,
//     ifCommented: false
//   },
//   {
//     id: 2,
//     shop: '院落创意菜2',
//     picture: '',
//     product: '百香果(冷饮)1扎',
//     price: 19.9,
//     ifCommented: false
//   },
//   {
//     id: 3,
//     shop: '院落创意菜3',
//     picture: '',
//     product: '百香果(冷饮)1扎',
//     price: 19.9,
//     ifCommented: false
//   },
//   {
//     id: 4,
//     shop: '院落创意菜4',
//     picture: '',
//     product: '百香果(冷饮)1扎',
//     price: 19.9,
//     ifCommented: true
//   }
// ];
// <OrderItem data={data} />;
class OrderList extends Component {
  render() {
    return (
      <div>{data.map((item, idx) => <OrderItem key={idx} data={item} />)}</div>
    );
  }
}

export default OrderList;
